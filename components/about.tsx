import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade } from "@chakra-ui/react"
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FaReact, FaJava, FaPhp, FaSwift, FaPython } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "./layout";
import ScribblesThree from "./scribbles/scribble3";
import { renderToStaticMarkup } from 'react-dom/server';
import ScribblesOne from "./scribbles/scribble1";
import ScribblesNine from "./scribbles/scribble9";
import { Keyframes, keyframes } from "@emotion/react";
import ScribblesFour from "./scribbles/scribble4";
import ScribblesTwelve from "./scribbles/scribble12";

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
    <Box h={'100vh'} w='full' ref={boxRef} style={{
      backgroundImage: `
        url("data:image/svg+xml;charset=UTF-8,${scribble1}"),
        url("data:image/svg+xml;charset=UTF-8,${scribble3}")
      `,
      backgroundPosition: `
        100px 100%,
        95% 55%
      `,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: '100px 100px',
    }}>
      <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80 } style={{
        width: '100%',
        height: '100%'
      }}>
        <Box w='full' h='full' display='flex' justifyContent={'center'}>
          <Center style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribblesNine fill="#ffcaaa8a" transform={`rotate(${isRotate ? 15 : 45}) scale(-1, 1) scale(0.3)`} />))}")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '95px 25px',
              backgroundSize: '300px 300px'
            }}>
            <Box w={['container.lg']} display='flex' justifyContent={'end'} style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribblesTwelve fill="#ffcaaa8a" transform={`scale(1, -1) rotate(${isRotate ? -60 : -50}) scale(0.2)`}/>))}")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '-150px 0px'
            }}>
              <VStack w={['container.md']}>
                <Flex w='full' alignItems="center">
                  <Box pr='5'>
                    <Text w='auto' fontWeight="bold" fontSize="2xl" color='orange.300'>About Me</Text>
                  </Box>
                  <Box flex='1 0 auto'>
                    <Divider />
                  </Box>
                </Flex>
                <Flex w='100%' alignSelf="flex-end" wrap="wrap" direction="row">
                  <Center w={['full', 'full', 'auto']} pb={['5', '5', '0']}>
                    <Box bgColor='gray.100' borderRadius='full' w='300px' h='300px'/>
                    {/* <Image
                      borderRadius='full'
                      boxSize='300px'
                      src='/images/pp.jpg'
                      alt='Wai Choon profile picture'
                    /> */}
                  </Center>
                  <VStack pl={['0', '0', '10']} align="flex-start" flex='1'>
                    <Text fontSize='md' color='gray.500'>
                      Hello! My name is Wai Choon, also known as Evan, and I am passionate about programming. I thrive on pushing the boundaries of my comfort zone and actively seek out new learning opportunities. In my free time, I utilize programming to enhance my everyday life by automating tasks and streamlining processes. I find great satisfaction in using my programming skills to improve my own efficiency and productivity.
                    </Text>
                    <Text fontSize='md' color='gray.500'>
                      Furthermore, I am dedicated to contributing to the communities I am a part of. I enjoy sharing my expertise and providing quality-of-life scripts to enhance the overall experience for everyone involved.
                    </Text>
                    <Text fontSize='md' color='gray.500'>
                      Here are some technologies I’ve been using recently:
                    </Text>
                    <HStack pt='2' w='full'>
                      <Box pr='10'>
                        <List spacing={3}>
                          <ListItem>
                            <ListIcon as={FaReact} color='orange.500' />
                            React
                          </ListItem>
                          <ListItem>
                            <ListIcon as={RiFlutterFill} color='orange.500' />
                            Flutter
                          </ListItem>
                          <ListItem>
                            <ListIcon as={FaPython} color='orange.500' />
                            Python
                          </ListItem>
                        </List>
                      </Box>
                      <Box>
                        <List spacing={3}>
                          <ListItem>
                            <ListIcon as={FaPhp} color='orange.500' />
                            PHP
                          </ListItem>
                          <ListItem>
                            <ListIcon as={SiTypescript} color='orange.500' />
                            TypeScript
                          </ListItem>
                          <ListItem>
                            <ListIcon as={FaSwift} color='orange.500' />
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