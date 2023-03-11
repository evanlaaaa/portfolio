import { Box, Center, Heading, Link, SlideFade, Text } from "@chakra-ui/react"

export const PortfolioHeader = () => {
  return (
    <Box w='full' h='100vh' bgImage="url('/portfolio/test.jpg')" bgSize='cover'>
      <Center>
        <Box w='container.lg'>
          <Box mt='40%' mb='250px' w={["100%", "md", "container.md"]} bg='blackAlpha.500' p='10' borderRadius='md' h='auto'>
            <SlideFade in={true} offsetX={-80} delay={0.5}>
              <Text fontWeight="semibold" fontSize="lg" color='whiteAlpha.800' pb="2.5">
                Hi, my name is
              </Text>
              <Heading color="orange.300" size="4xl" pb="5">Chong Wai Choon</Heading>
              <Text fontSize="2xl" color='whiteAlpha.800' pb="5">
                You can call me <Text fontWeight="bold" color="orange.300" as="span">Evan</Text>,
              </Text>
              <Box maxW={["100%", "75%"]}>
              <Text fontSize='md' color='whiteAlpha.800'>
                {"A Web/Mobile application developer with a passion for everything. Currently, I’m focused on building accessible, human-centered mobile application at "}
                <Link 
                  href="https://www.v6technology.net/"
                  color="orange.300"
                >
                  V6 Technology
                </Link>
              </Text>
              </Box>
            </SlideFade>
          </Box>
        </Box>
      </Center>
    </Box>
    
  )
}