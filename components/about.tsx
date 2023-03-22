import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade } from "@chakra-ui/react"
import { useContext, useEffect, useRef, useState } from "react";
import { FaReact, FaJava, FaPhp, FaSwift } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "./layout";

export const AboutMe = () => {
  const [toShow, setToShow] = useState(false);
  const boxRef = useRef<HTMLElement>();

  const { aboutOffset, setAboutOffset } = useContext(NavigateContext);

  const scroll = () => {
    if(window.scrollY > aboutOffset && !toShow) {
      setToShow(true);
    }
  }

  const getPosition = () => {
    const offsetTop = boxRef.current?.offsetTop ?? 0;
    setAboutOffset(offsetTop + 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", getPosition)
    getPosition();
    return () => window.removeEventListener("scroll", scroll);
  },[])

  return (
    <Box py='200px' w={["100%", "md", "container.md"]} display={'flex'} alignSelf='flex-end' ref={boxRef}>
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
                Hello! My name is Wai Choon (or Evan) and I enjoy programming alot! My interest in programming started with a programming activity I participated in when I was in high school.
              </Text>
              <Text fontSize='md' color='gray.500'>
                I am a person who likes to step out of my comfort zone and actively look for more learning opportunities, which enables me to learn new knowledge in a short period of time. Several freelance jobs have allowed me to work independently or with a group and to experiment with different working styles in different work environments.
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
                      <ListIcon as={FaJava} color='orange.500' />
                      Java
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
  );
}