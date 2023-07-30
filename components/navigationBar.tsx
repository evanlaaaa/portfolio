import { HStack, Container, Text, Box, Flex, Center, Show, Circle, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, VStack } from "@chakra-ui/react";
import localFont from "next/font/local";
import Link from "./link";
import { INavigationBarProps } from "../types/interface";
import { useRouter } from "next/router";
import { FaArrowLeft, FaBars, FaHamburger } from "react-icons/fa";
import { useRef } from "react";

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

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex 
        h='64px' 
        className={roboto.className} 
        px={{ base: 3, md: 10}} 
        bg={!!!props.isStatic ? '#172a31DD' : undefined} 
        backdropFilter={!!!props.isStatic ? 'auto' : undefined} 
        backdropBlur={!!!props.isStatic ? 'md' : undefined} 
        justifyContent={{ base: 'start', md: 'center' }}
        position='relative' 
        w='full'
      >
        <Show below='md'>
          <Center h='full' pr={5}>
            <Circle size='40px' bg='forest.900' color='label.50' _hover={{ cursor: 'pointer' }} justifySelf='start' onClick={onOpen}>
              <FaBars />
            </Circle>
          </Center>
        </Show>
        <Center position={{ base: 'unset', lg: 'absolute' }} left={10} h='full'>
          <HStack align={'baseline'} spacing={0} onClick={() => props.handleNavigation('Home')} _hover={{ cursor: 'pointer' }} >
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
        <Show above='md'>
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
                        <Text as='span' fontFamily='Consolas'>{'//'}</Text> <Text as='span' className={roboto.className}>{r.name}</Text>
                      </Link>
                    );
                  })
                }
              </HStack>
            </Center>
          </Container>
        </Show>
      </Flex>
      <Show below='md'>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color='label.300' />

            <DrawerBody bg='forest.900' pt={10}>
              <VStack alignItems='start'>
                {
                  props.route.map((r, index) => {
                    return (
                      <Link
                        key={index}
                        p={2}
                        rounded={"md"}
                        currentpath={asPath}
                        isActive={r.isActive}
                        onClick={() => {
                          onClose();
                          props.handleNavigation(r.name)
                        }}
                        whiteSpace='nowrap'
                        color='label.600'
                        _hover={{
                          cursor: 'pointer'
                        }}
                      >
                        <Text as='span' fontFamily='Consolas'>{'//'}</Text> <Text as='span' className={roboto.className}>{r.name}</Text>
                      </Link>
                    );
                  })
                }
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  )
}

export default NavigationBar