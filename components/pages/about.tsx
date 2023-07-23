import { Box, Text, Divider, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade, Image } from "@chakra-ui/react"
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FaReact, FaPhp, FaSwift, FaPython } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "../layout";
import ScribblesThree from "../scribbles/scribble3";
import { renderToStaticMarkup } from 'react-dom/server';
import ScribblesOne from "../scribbles/scribble1";
import { Keyframes, keyframes } from "@emotion/react";
import localFont from "next/font/local";
import ScribblesNine from "../scribbles/scribble9";
import ScribblesTwelve from "../scribbles/scribble12";
import ScribblesFour from "../scribbles/scribble4";
import ScribblesTwo from "../scribbles/scribble2";

const oswald = localFont({ src: '../../public/fonts/oswald/Oswald-VariableFont_wght.ttf'})

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
})

export const AboutMe = () => {
  const [toShow, setToShow] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const [isRotate, setIsRotate] = useState(false);

  const scribble9Keyframe: Keyframes = keyframes`
    0% { transform: translateX(0%); }
    99.99% { transform: translateX(-100%) }
  `

  const scribble1 = encodeURIComponent(renderToStaticMarkup(<ScribblesOne fill="#ffcaaa8a" />));
  const scribble3 = encodeURIComponent(renderToStaticMarkup(<ScribblesThree fill="#ffcaaa8a" />));

  const { aboutOffset, setAboutOffset } = useContext(NavigateContext);

  const scroll = () => {
    if(window.scrollY > aboutOffset && !toShow) {
      setToShow(true);
    }
  }

  const getPosition = useCallback(() => {
    const offsetTop = boxRef.current?.offsetTop ?? 0;
    setAboutOffset(offsetTop - window.innerHeight + 500);
  }, [boxRef.current])

  const triggerRotation = () => {
    setIsRotate(prev => !prev)
  }

  useEffect(() => {
    const interval = setInterval(() => triggerRotation(), 1200)

    getPosition();
    return () => {
      window.removeEventListener("scroll", scroll)
      clearInterval(interval)
    }
  },[])

  useEffect(() => {
    if(aboutOffset != 0) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [aboutOffset])

  return (
    <Box h={['calc(100vh + 100px)', '100vh']} w='full' ref={boxRef} bg='#0d1c26' style={{
      backgroundImage: `
        url("/portfolio/images/background/about_bg.png"),
        url("/portfolio/images/background/about_bg2.png"),
        url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribblesTwelve fill="#ffcaaa8a" transform={`scale(1, -1) rotate(-80) scale(0.1)`}/>))}"),
        url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribblesThree fill="#ffcaaa8a" transform={`scale(0.1)`}/>))}")
        `,
      backgroundPosition: `
        50px 550px,
        1400px 100px,
        -300px -200px,
        1000px 300px
      `,
      backgroundRepeat: 'no-repeat', 
    }}>
      <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80 } style={{
        width: '100%',
        height: '100%'
      }}>
        <Box w='full' h='full' display='flex' justifyContent={'center'}>
          <Center>
            <Box w={['full', 'container.lg']} display='flex' justifyContent={'center'} >
              <VStack w={['full', 'container.md']}>
                <Flex w='full' alignItems="center" px={3}>
                  <Box h='50px' w='50px' position='absolute' mt={isRotate ? '-75px' : '-80px'} ml={isRotate ? '-35px' : '-30px'}>
                    <ScribblesNine fill="#ffcaaa8a" transform={`rotate(${isRotate ? 15 : 45}) scale(-1, 1)`} />
                  </Box>
                  <Box pr='5'>
                    <Text w='auto' fontWeight="bold" fontSize="2xl" color='#D9895B' className={oswald.className}>About Me</Text>
                  </Box>
                  <Box flex='1 0 auto'>
                    <Divider />
                  </Box>
                </Flex>
                <Flex w='100%' alignSelf="flex-center" wrap="wrap" direction="row" px={[3, 0]}>
                  <Center w={['full', 'full', 'auto']} pb={['5', '5', '0']}>
                    {/* <Box bgColor='gray.100' borderRadius='full' w='300px' h='300px'/> */}
                    <Image
                      borderRadius='full'
                      boxSize='300px'
                      src='/portfolio/images/pp.jpg'
                      alt='Wai Choon profile picture'
                    />
                  </Center>
                  <VStack pl={['0', '0', '10']} align="flex-start" flex='1' spacing={2.5}>
                    <Text fontSize='md' color='#687A6E' className={roboto.className} textAlign={['center', 'left']}>
                      Hello! My name is Wai Choon, also known as Evan, and I am passionate about programming. I thrive on pushing the boundaries of my comfort zone and actively seek out new learning opportunities. In my free time, I utilize programming to enhance my everyday life by automating tasks and streamlining processes. I find great satisfaction in using my programming skills to improve my own efficiency and productivity.
                    </Text>
                    <Text fontSize='md' color='#687A6E' className={roboto.className} textAlign={['center', 'left']}>
                      Furthermore, I am dedicated to contributing to the communities I am a part of. I enjoy sharing my expertise and providing quality-of-life scripts to enhance the overall experience for everyone involved.
                    </Text>
                    <Text fontSize='md' color='#687A6E' className={roboto.className} textAlign={['center', 'left']}>
                      Here are some technologies I’ve been using recently:
                    </Text>
                    <HStack w='full' justify={['center', 'left']}>
                      <Box pr='10'>
                        <List spacing={3}>
                          <ListItem color='#687A6E' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaReact} color='teal.300' />
                            <Box onClick={() => alert("Yes there is no secret")} display={'inline'}>React</Box>
                          </ListItem>
                          <ListItem color='#687A6E' className={roboto.className} fontWeight={500}>
                            <ListIcon as={RiFlutterFill} color='teal.300' />
                            Flutter
                          </ListItem>
                          <ListItem color='#687A6E' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaPython} color='teal.300' />
                            Python
                          </ListItem>
                        </List>
                      </Box>
                      <Box>
                        <List spacing={3}>
                          <ListItem color='#687A6E' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaPhp} color='teal.300' />
                            PHP
                          </ListItem>
                          <ListItem color='#687A6E' className={roboto.className} fontWeight={500}>
                            <ListIcon as={SiTypescript} color='teal.300' />
                            TypeScript
                          </ListItem>
                          <ListItem color='#687A6E' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaSwift} color='teal.300' />
                            Swift
                          </ListItem>
                        </List>
                      </Box>
                    </HStack>
                  </VStack>
                </Flex>
              </VStack>
            </Box>
          </Center>
        </Box>
      </SlideFade>
    </Box>
  );
}