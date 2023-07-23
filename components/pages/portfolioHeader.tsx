import { Box, Center, Divider, HStack, Heading, Link, SlideFade, Text, VStack } from "@chakra-ui/react"
import { isMobile } from 'react-device-detect'
import InfiniteSlide from "../infiniteSlide"
import localFont from 'next/font/local'

// const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '900'] })
// const oswald = Oswald({ subsets: ['latin'], weight: ['500', '400', '300'] })

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ]
})

const oswald = localFont({ src: '../../public/fonts/oswald/Oswald-VariableFont_wght.ttf'})

const varela = localFont({ src: '../../public/fonts/VarelaRound-Regular.ttf'})

export const PortfolioHeader = () => {
  return (
    <Box w='full' bg='linear-gradient(180deg, rgba(40,62,73,1) 0%, rgba(13,28,38,1) 100%);' height={'100vh'}>
      <Box h='64px' position='absolute'>
        <HStack h='full' className={roboto.className} px={10}>
          <HStack align={'baseline'} spacing={0}>
            <Text fontSize='3xl' color='teal.200'>
              Evan
            </Text>
            <Text mx={1} fontSize='4xl' color='#F2F0EB'>
            .
            </Text>
            <Text fontSize='3xl' color='#1A2E37'>
            La
            </Text>
            <Box mb={"-10px"} mx={1} h='3px' w='17px' bgColor='purple.300' borderRadius={'full'} transform={'translatey(2px)'}/>
          </HStack>
        </HStack>
      </Box>
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
        <Box position='absolute' w='full' h='full' zIndex={2} display='flex' justifyContent={'center'}>
          <Center>
            <VStack w={['full', 'xl']}>
              <Box textAlign={'center'}>
                <Text color="#D9895B" fontSize="6xl" className={oswald.className} fontWeight={300}>HELLO, I'M</Text>
                <Text color="#F2A663" fontSize="6xl" className={oswald.className} fontWeight={500}>CHONG WAI CHOON</Text>
              </Box>
              <Box px={20} w='full'>
                <Divider borderColor='#8C644D' />
              </Box>
              <HStack textAlign={'center'} className={oswald.className} fontWeight={500} pt={5} color="#D9895B" fontSize='lg'>
                <Text color="#ECB165">Software Engineer</Text>
                <Text color="#D9895B">&nbsp; | &nbsp;</Text>
                <Text color="#ECB165">Mobile App Developer</Text>
                <Text color="#D9895B">&nbsp; | &nbsp;</Text>
                <Text color="#ECB165">Web Developer</Text>
              </HStack>
            </VStack>
          </Center>
        </Box>
      </div>
    </Box>
  )
}