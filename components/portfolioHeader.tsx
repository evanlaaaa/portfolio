import { Box, Center, Divider, Heading, Link, SlideFade, Text, VStack } from "@chakra-ui/react"
import { isMobile } from 'react-device-detect'
import InfiniteSlide from "./infiniteSlide"
import { Oswald, PT_Sans_Narrow, Roboto } from 'next/font/google'
import localFont from 'next/font/local'

// const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '900'] })
// const oswald = Oswald({ subsets: ['latin'], weight: ['500', '400', '300'] })

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ]
})

const oswald = localFont({ src: '../public/fonts/oswald/Oswald-VariableFont_wght.ttf'})

export const PortfolioHeader = () => {
  return (
    // <Box mt="64px" w='full' h='100vh' bgImage="url('/portfolio/test.jpg')" bgSize='cover' display='flex' alignItems='center'>
    //   <Box>
    //     <Box w='full'  ml={['0', '0', '100px']}>
    //       <Box w={["100%", "container.md", "container.md"]} bg='blackAlpha.500' p='10' borderRadius='md' h='auto'>
    //         <SlideFade in={true} offsetX={ isMobile ? 0 : -80} delay={0.5}>
    //           <Text fontWeight="semibold" fontSize="lg" color='whiteAlpha.800' pb="2.5">
    //             Hi, my name is
    //           </Text>
    //           <Heading color="orange.300" size="4xl" pb="5">Chong Wai Choon</Heading>
    //           <Text fontSize="2xl" color='whiteAlpha.800' pb="5">
    //             You can call me <Text fontWeight="bold" color="orange.300" as="span">Evan</Text>,
    //           </Text>
    //           <Box maxW={["100%", "75%"]}>
    //           <Text fontSize='md' color='whiteAlpha.800'>
    //             {"A Web/Mobile application developer with a passion for everything. Currently, I’m focused on building accessible, human-centered mobile application at "}
    //             <Link 
    //               href="https://www.v6technology.net/"
    //               color="orange.300"
    //             >
    //               V6 Technology
    //             </Link>
    //           </Text>
    //           </Box>
    //         </SlideFade>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    <Box w='full' bg='orange.100' mt='64px' height={'100vh'}>
      <div style={{width: '100%', position:'relative', overflow: 'hidden', height: '100vh'}}>
        <VStack spacing={'80px'} w='full' h='full' position='absolute' justifyContent={'center'}>
          <InfiniteSlide direction='left'/>
          <InfiniteSlide direction='right' />
          <InfiniteSlide direction='left' isEven />
          <InfiniteSlide direction='right' isEven />
          <InfiniteSlide direction='left' />
          <InfiniteSlide direction='right' />
          <InfiniteSlide direction='left' isEven />
        </VStack>
        <Box position='absolute' w='full' h='full' bg='#82451980' zIndex={1} display='flex' justifyContent={'center'} />
        <Box position='absolute' w='full' h='full' zIndex={2} display='flex' justifyContent={'center'}>
          <Center>
            <VStack w='lg'>
              <Box textAlign={'center'}>
                <Text color="orange.700" fontSize="6xl" className={oswald.className} fontWeight={300}>HELLO, I'M</Text>
                <Text color="orange.900" fontSize="6xl" className={oswald.className} fontWeight={500}>CHONG WAI CHOON</Text>
              </Box>
              <Box px={20} w='full'>
                <Divider borderColor='orange.600' />
              </Box>
              <Box textAlign={'center'} className={roboto.className} fontWeight={500} pt={5} color="#4a1000" fontSize='lg'>
                {"A Web/Mobile application developer with a passion for everything. Currently, I’m focused on building accessible, human-centered mobile application at "}
                 <Link 
                   href="https:www.v6technology.net/"
                   color="#fac585"
                 >
                   V6 Technology
                 </Link>
              </Box>
            </VStack>
          </Center>
        </Box>
      </div>
    </Box>
  )
}