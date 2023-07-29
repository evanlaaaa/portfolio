import { HStack, Container, Text, Box, Flex, Center } from "@chakra-ui/react";
import localFont from "next/font/local";
import Link from "./link";
import { INavigationBarProps } from "../types/interface";
import { useRouter } from "next/router";

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ]
})

const NavigationBar = (props: INavigationBarProps) => {
  const router = useRouter();
  let { asPath } = router;

  return (
    <Flex 
      h='64px' 
      className={roboto.className} 
      px={10} 
      bg={!!!props.isStatic ? '#172a31DD' : undefined} 
      backdropFilter={!!!props.isStatic ? 'auto' : undefined} 
      backdropBlur={!!!props.isStatic ? 'md' : undefined} 
      justifyContent='center' 
      position='relative' 
      w='full'
    >
      <Center position='absolute' left={10} h='full'>
        <HStack align={'baseline'} spacing={0} >
          <Text fontSize='3xl' color='teal.200'>
            Evan
          </Text>
          <Text mx={1} fontSize='3xl' color='#F2F0EB'>
          .
          </Text>
          <Text fontSize='3xl' color='#1A2E37'>
          La
          </Text>
          <Box mb={"-10px"} mx={1} h='3px' w='17px' bgColor='purple.300' borderRadius={'full'} transform={'translatey(2px)'}/>
        </HStack>
      </Center>
      <Container overflow={'auto'}>
        <Center h='full'>
          <HStack>
            {
              props.route.map((r, index) => {
                return (
                  <Link
                    key={index}
                    p={2}
                    rounded={"md"}
                    currentpath={asPath}
                    isActive={r.isActive}
                    onClick={() => props.handleNavigation(r.name)}
                    whiteSpace='nowrap'
                    color='label.600'
                  >
                    <Text as='span' fontFamily='Consolas'>//</Text> <Text as='span' className={roboto.className}>{r.name}</Text>
                  </Link>
                );
              })
            }
          </HStack>
        </Center>
      </Container>
    </Flex>
  )
}

export default NavigationBar