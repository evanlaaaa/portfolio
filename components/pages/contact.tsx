import { Box, Text, Center, Flex, VStack, SlideFade, Button, Link, useSafeLayoutEffect } from "@chakra-ui/react"
import { useEffect, useState, useRef, useContext, useLayoutEffect, useCallback } from "react";
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "../layout";
import localFont from "next/font/local";
import { renderToStaticMarkup } from "react-dom/server";
import ScribbleEleven from "../scribbles/scribble11";
import ScribbleSix from "../scribbles/scribble6";
import ScribbleFourteen from "../scribbles/scribble14";

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

export const Contact = () => {
  const [toShow, setToShow] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const { contactRef, setContactRef } = useContext(NavigateContext);

  const scroll = useCallback(() => {
    if (contactRef == null || contactRef.current == null) return

    if(window.scrollY > contactRef!.current!.offsetTop - 500 && !toShow) {
      setToShow(true);
    }
  }, [contactRef])

  const getPosition = () => {
    setContactRef(boxRef);
  }

  useSafeLayoutEffect(() => {
    getPosition();
  },[])

  useEffect(() => {
    if(contactRef != null) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [contactRef])
  
  return (
    <Box 
      h={'100vh'} 
      w='full' 
      ref={boxRef} 
      bg='primary.900'
      style={{
        backgroundImage: `
          url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(renderToStaticMarkup(<ScribbleFourteen fill="#ffcaaa8a" transform={'scale(0.1)'} />))}")
        `,
        backgroundPosition: `
          0px -200px
        `,
        backgroundSize: '100vw 100vh',
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <Box h='full' w='full' display='flex' justifyContent={'center'}>
        <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80} style={{width: '100%', height: '100%'}}>
          <Center w='full' h='full'>
            <VStack w={['lg']} align={'center'}>
              <Flex w='full' alignItems="center">
                <Center w='full'>
                  <Text w='auto' fontWeight="bold" fontSize="2xl" color='secondary.300' className={oswald.className}>Contact Me</Text>
                </Center>
              </Flex>
              <Flex w='100%' alignSelf="flex-end" wrap="wrap" direction="row" pt='5'>
                <VStack pl={['0', '0', '0']} align="center" flex='1' spacing='2'>
                  <Text fontSize='md' color='label.300' textAlign='center' className={roboto.className}>
                    {"Have any exciting job opportunities or engaging projects that you believe align with my abilities? Contact me now!"}
                  </Text>
                  <Text fontSize='md' color='label.300' textAlign='center' className={roboto.className}>
                    {"I will do my best to get back to you as soon as possible."}
                  </Text>
                  <Link style={{ textDecoration: 'none' }} href='mailto:waichoon97@gmail.com' pt={5}>
                    <Button colorScheme='secondary' variant='outline'>
                        Send Hi!
                    </Button>
                  </Link>
                </VStack>
              </Flex>
            </VStack>
          </Center>
        </SlideFade>
      </Box>
    </Box>
  );
}