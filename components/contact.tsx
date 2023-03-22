import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade, Button, Link } from "@chakra-ui/react"
import { useEffect, useState, useRef, useContext } from "react";
import { FaReact, FaJava, FaPhp, FaSwift } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "./layout";

export const Contact = () => {
  const [toShow, setToShow] = useState(false);
  const boxRef = useRef<HTMLElement>();

  const { contactOffset, setContactOffset } = useContext(NavigateContext);

  const scroll = () => {
    if(window.scrollY > contactOffset && !toShow) {
      setToShow(true);
    }
  }

  const getPosition = () => {
    const offsetTop = boxRef.current?.offsetTop ?? 0;
    setContactOffset(offsetTop + 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", getPosition)
    getPosition();
    return () => window.removeEventListener("scroll", scroll);
  },[])

  return (
    <Box pt='100px' pb='250px' w={["100%", "md", "md"]} display='flex' alignSelf='center' ref={boxRef}>
      <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80}>
        <VStack w='full'>
          <Flex w='full' alignItems="center">
            <Center w='full'>
              <Text w='auto' fontWeight="bold" fontSize="2xl" color='orange.300'>Contact Me</Text>
            </Center>
          </Flex>
          <Flex w='100%' alignSelf="flex-end" wrap="wrap" direction="row" pt='5'>
            <VStack pl={['0', '0', '10']} align="center" flex='1' spacing='10'>
              <Text fontSize='md' color='gray.500' textAlign='center'>
                {"Currently I\'m not looking for new opportunities to grow my career experience. But you can still contact me via email. I will do my best to get back to you as soon as possible."}
              </Text>
              <Link style={{ textDecoration: 'none' }} href='mailto:waichoon97@gmail.com'>
                <Button colorScheme='orange' variant='outline'>
                    Send Hi!
                </Button>
              </Link>
            </VStack>
          </Flex>
        </VStack>
      </SlideFade>
    </Box>
  );
}