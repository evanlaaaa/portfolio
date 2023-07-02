import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade } from "@chakra-ui/react"
import { useContext, useEffect, useRef, useState } from "react";
import { FaReact, FaJava, FaPhp, FaSwift, FaPython } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "./layout";
import ScribblesThree from "./scribbles/scribble3";
import { renderToStaticMarkup } from 'react-dom/server';
import ScribblesOne from "./scribbles/scribble1";

export const AboutMe = () => {
  const [toShow, setToShow] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const svgString = encodeURIComponent(renderToStaticMarkup(<ScribblesThree fill="chocolate" transform="" />));
  const svgString2 = encodeURIComponent(renderToStaticMarkup(<ScribblesOne fill="chocolate" transform="" />));

  const { aboutOffset, setAboutOffset } = useContext(NavigateContext);

  const scroll = () => {
    if(window.scrollY > aboutOffset && !toShow) {
      setToShow(true);
    }
  }

  const getPosition = () => {
    const offsetTop = boxRef.current?.offsetTop ?? 0;
    setAboutOffset(offsetTop - window.innerHeight + 500);
  }

  useEffect(() => {
    getPosition();
  },[])

  useEffect(() => {
    if(aboutOffset != 0) {
      window.addEventListener("scroll", scroll);
      // window.addEventListener("resize", getPosition)
    }
  }, [aboutOffset])

  return (
    <>
      <Box py='200px' w={["100%", "md", "container.md"]} display={'flex'} alignSelf='flex-end' ref={boxRef} style={{backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${svgString}"), url("data:image/svg+xml;charset=UTF-8,${svgString2}")`, backgroundRepeat: 'no-repear', backgroundSize: '100px 100px'}}>
        <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80 }>
          <VStack w='full'>
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
                <Image
                  borderRadius='full'
                  boxSize='300px'
                  src='/portfolio/pp.jpg'
                  alt='Wai Choon profile picture'
                />
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
        </SlideFade>
      </Box>
    </>
  );
}