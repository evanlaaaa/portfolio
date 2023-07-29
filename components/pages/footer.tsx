import { Center, HStack, Link, Text } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"

export const Footer = () => {
  return (
    <Center w='full' py='5' bg='primary.900'>
      <Link color='orange.400' fontWeight='semibold' href='https://github.com/evanlaaaa/portfolio'>
        <HStack>
          <Text>
            Designed & Built by Evan
          </Text>
          <FaGithub />
        </HStack>
      </Link>
    </Center>
  )
}