import { Box, Heading, Link, SlideFade, Text } from "@chakra-ui/react"

export const PortfolioHeader = () => {
  return (
    <Box py='220px' w={["100%", "md", "container.md"]}>
      <SlideFade in={true} offsetX={-80} delay={0.5}>
        <Text fontWeight="semibold" fontSize="lg" color='orange.300' pb="2.5">
          Hi, my name is
        </Text>
        <Heading color="gray.700" size="4xl" pb="5">Chong Wai Choon</Heading>
        <Text fontSize="2xl" color='gray.600' pb="5">
          You can call me <Text fontWeight="bold" color="gray.700" as="span">Evan</Text>,
        </Text>
        <Box maxW={["100%", "75%"]}>
        <Text fontSize='md' color='gray.500'>
          {"A Web/Mobile application developer with a passion for everything. Currently, I’m focused on building accessible, human-centered mobile application at "}
          <Link 
            href="https://www.silkron.com/"
            color="orange.300"
          >
            Silkron
          </Link>
        </Text>
        </Box>
      </SlideFade>
    </Box>
  )
}