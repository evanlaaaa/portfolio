import { Box, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react"
import InfiniteSlide from "../infiniteSlide"
import localFont from 'next/font/local'
import { NavigationBarLayout } from "../layout/navBar"

const oswald = localFont({ src: '../../public/fonts/oswald/Oswald-VariableFont_wght.ttf'})

export const PortfolioHeader = () => {
  return (
    <Box w='full' bgGradient='linear(to-b, primary.700, primary.900)' height={'100vh'}>
      <Box h='64px' position='absolute' w='full' zIndex={10}>
        <NavigationBarLayout isStatic />
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
                <Text color="secondary.200" fontSize="6xl" className={oswald.className} fontWeight={300}>HELLO, I'M</Text>
                <Text color="secondary.300" fontSize="6xl" className={oswald.className} fontWeight={500}>CHONG WAI CHOON</Text>
              </Box>
              <Box px={20} w='full'>
                <Divider borderColor='#8C644D' />
              </Box>
              <HStack textAlign={'center'} className={oswald.className} fontWeight={500} pt={5} color="secondary.400" fontSize='lg'>
                <Text color="secondary.200">Software Engineer</Text>
                <Text color="secondary.400">&nbsp; | &nbsp;</Text>
                <Text color="secondary.200">Mobile App Developer</Text>
                <Text color="secondary.400">&nbsp; | &nbsp;</Text>
                <Text color="secondary.200">Web Developer</Text>
              </HStack>
            </VStack>
          </Center>
        </Box>
      </div>
    </Box>
  )
}