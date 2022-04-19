import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade, Button, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { FaReact, FaJava, FaPhp, FaSwift } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

export const Contact = () => {
  const [toShow, setToShow] = useState(false);

  const scroll = () => {
    if(window.scrollY > 4600) {
      setToShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  },[])

  return (
    <Box pt='100px' pb='250px' w={["100%", "md", "md"]} display='flex' alignSelf='center'>
      <SlideFade in={toShow} offsetX={80}>
        <VStack w='full'>
          <Flex w='full' alignItems="center">
            <Center w='full'>
              <Text w='auto' fontWeight="bold" fontSize="2xl" color='orange.300'>Contact Me</Text>
            </Center>
          </Flex>
          <Flex w='100%' alignSelf="flex-end" wrap="wrap" direction="row" pt='5'>
            <VStack pl={['0', '0', '10']} align="center" flex='1' spacing='10'>
              <Text fontSize='md' color='gray.500' textAlign='center'>
                I'm currently looking for new opportunities to grow my career experience. You can request for my resume by contacting me via email. I will do my best to get back to you as soon as possible.
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