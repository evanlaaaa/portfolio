import { Box, Text, Divider, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade, Image, useSafeLayoutEffect } from "@chakra-ui/react"
import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaReact, FaPhp, FaSwift, FaPython } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "../layout";
import ScribblesThree from "../scribbles/scribble3";
import { renderToStaticMarkup } from 'react-dom/server';
import localFont from "next/font/local";
import ScribblesNine from "../scribbles/scribble9";
import ScribblesTwelve from "../scribbles/scribble12";

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
  const [isRotate, setIsRotate] = useState(false);
  const { aboutRef, setAboutRef } = useContext(NavigateContext);
  const boxRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(() => {
    if (aboutRef == null || aboutRef.current == null) return

    if(window.scrollY > aboutRef!.current!.offsetTop - 500 && !toShow) {
      setToShow(true);
    }
  }, [aboutRef])

  const getPosition = () => {
    setAboutRef(boxRef);
  }

  const triggerRotation = () => {
    setIsRotate(prev => !prev)
  }

  useSafeLayoutEffect(() => {
    const interval = setInterval(() => triggerRotation(), 1200)

    getPosition();
    return () => {
      window.removeEventListener("scroll", scroll)
      clearInterval(interval)
    }
  },[])

  useEffect(() => {
    if(aboutRef != null) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [aboutRef])

  return (
    <Box 
      h={['calc(100vh + 100px)', '100vh']} 
      w='full' 
      ref={boxRef} 
      bg='primary.900' 
      bgImage={{
        md: `
          url("/images/background/about_bg.png"),
          url("/images/background/about_bg2.png"),
          url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribblesTwelve fill="#ffcaaa8a" transform={`scale(1, -1) rotate(-80) scale(0.1)`}/>))}"),
          url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribblesThree fill="#ffcaaa8a" transform={`scale(0.1)`}/>))}")
        `
      }}
      style={{
        backgroundPosition: `
          50px 550px,
          1400px 100px,
          -300px -200px,
          1000px 300px
        `,
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80 } style={{
        width: '100%',
        height: '100%'
      }}>
        <Box w='full' h='full' display='flex' justifyContent={'center'}>
          <Center>
            <Box w={{ base: 'full', md: 'container.md'}} display='flex' justifyContent={'center'} >
              <VStack w='full'>
                <Flex w='full' alignItems="center" px={3}>
                  <Box h='50px' w='50px' position='absolute' mt={isRotate ? '-75px' : '-80px'} ml={isRotate ? '-35px' : '-30px'}>
                    <ScribblesNine fill="#ffcaaa8a" transform={`rotate(${isRotate ? 15 : 45}) scale(-1, 1)`} />
                  </Box>
                  <Box pr='5'>
                    <Text w='auto' fontWeight="bold" fontSize="2xl" color='secondary.300' className={oswald.className}>About Me</Text>
                  </Box>
                  <Box flex='1 0 auto'>
                    <Divider />
                  </Box>
                </Flex>
                <Flex w='100%' alignSelf="flex-center" wrap="wrap" direction="row" gap={10}>
                  <Center w={['full', 'full', 'auto']}>
                    <Image
                      borderRadius='full'
                      boxSize='300px'
                      src='/images/pp.jpg'
                      alt='Wai Choon profile picture'
                    />
                  </Center>
                  <VStack px={{ base: 5, md: 0}} align="flex-start" flex='1' spacing={2.5}>
                    <Text fontSize='md' color='label.400' className={roboto.className} textAlign={['center', 'left']} __css={{ 'text-wrap': 'balance'}}>
                      Hello! My name is Wai Choon, also known as Evan, and I am passionate about programming. I thrive on pushing the boundaries of my comfort zone and actively seek out new learning opportunities. In my free time, I utilize programming to enhance my everyday life by automating tasks and streamlining processes. I find great satisfaction in using my programming skills to improve my own efficiency and productivity.
                    </Text>
                    <Text fontSize='md' color='label.400' className={roboto.className} textAlign={['center', 'left']} __css={{ 'text-wrap': 'balance'}}>
                      Furthermore, I am dedicated to contributing to the communities I am a part of. I enjoy sharing my expertise and providing quality-of-life scripts to enhance the overall experience for everyone involved.
                    </Text>
                    <Text fontSize='md' color='label.400' className={roboto.className} textAlign={['center', 'left']} __css={{ 'text-wrap': 'balance'}}>
                      Here are some technologies I’ve been using recently:
                    </Text>
                    <HStack w='full' justify={['center', 'left']}>
                      <Box pr='10'>
                        <List spacing={3}>
                          <ListItem color='label.400' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaReact} color='teal.300' />
                            <Box onClick={() => alert("Yes there is no secret")} display={'inline'}>React</Box>
                          </ListItem>
                          <ListItem color='label.400' className={roboto.className} fontWeight={500}>
                            <ListIcon as={RiFlutterFill} color='teal.300' />
                            Flutter
                          </ListItem>
                          <ListItem color='label.400' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaPython} color='teal.300' />
                            Python
                          </ListItem>
                        </List>
                      </Box>
                      <Box>
                        <List spacing={3}>
                          <ListItem color='label.400' className={roboto.className} fontWeight={500}>
                            <ListIcon as={FaPhp} color='teal.300' />
                            PHP
                          </ListItem>
                          <ListItem color='label.400' className={roboto.className} fontWeight={500}>
                            <ListIcon as={SiTypescript} color='teal.300' />
                            TypeScript
                          </ListItem>
                          <ListItem color='label.400' className={roboto.className} fontWeight={500}>
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