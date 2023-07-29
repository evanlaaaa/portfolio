import { Box, Link, Divider, VStack, Flex, Icon, Text, HStack, SlideFade, Center, Spacer, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, useSafeLayoutEffect } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai'
import { isMobile } from 'react-device-detect';
import { NavigateContext } from '../layout';
import localFont from 'next/font/local';
import { FaLink, FaMapMarkerAlt } from 'react-icons/fa';
import { IJob } from '../../model/interfaces';

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

export const Experience = () => {
  const [toShow, setToShow] = useState(false);
  const [experiences, setExperiences] = useState<IJob[]>([])

  const boxRef = useRef<HTMLDivElement>(null);

  const { experienceRef, setExperienceRef } = useContext(NavigateContext);

  const fetchExperience = async () => {
    const response = await fetch("/api/experience");
    const data = await response.json();
    setExperiences(data)
  }

  useEffect(() => {
    fetchExperience()
  }, [])

  useSafeLayoutEffect(() => {
    getPosition();
  },[])

  useEffect(() => {
    if(experienceRef != null) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [experienceRef])

  const scroll = useCallback(() =>{
    if (experienceRef == null || experienceRef.current == null) return

    if(window.scrollY > experienceRef!.current!.offsetTop - 500 && !toShow) {
      setToShow(true);
    }
  }, [experienceRef])

  const getPosition = () => {
    setExperienceRef(boxRef);
  }

  return (
    <Box minH='100vh' w='full' bg='primary.900' ref={boxRef}>
      <Box h='full' w='full' display='flex' justifyContent={'center'} >
        <SlideFade in={toShow} offsetX={ isMobile ? 0 : -80} style={{width: '100%', height: '100%'}}>
          <Center pt='calc(100vh / 3)'>
            <Box w={{ base: 'full', md: 'container.md'}} display='flex' justifyContent={'center'} py='auto' px={5}>
              <VStack w='full'>
                <Flex w='full' alignItems="center">
                  <Box pr='5'>
                    <Text w='auto' fontWeight="bold" fontSize="2xl" color='secondary.300' className={oswald.className}>{"Where I\'ve worked"}</Text>
                  </Box>
                  <Box flex='1 0 auto'>
                    <Divider />
                  </Box>
                </Flex>
                <Accordion px={{ base: 0, md: 10 }} allowToggle pt={5} pb={20} defaultIndex={[0]}>
                  {
                    experiences.map((job, index) => {
                      return (
                        <AccordionItem border='none' my={3} key={index}>
                          <AccordionButton bgColor='forest.500' py={3} px={5} borderRadius={'md'} className={roboto.className} onClick={() => getPosition()} _hover={{ bgColor: 'none' }}>
                            <HStack w='full' borderRadius={'xl'} className={roboto.className}>
                              <Box flex={1} textAlign='left'>
                                {job.positionTitle} @ {job.companyName}
                              </Box>
                              <Box>
                                {job.dateRange}
                              </Box>
                              <AccordionIcon />
                            </HStack>
                          </AccordionButton>
                          <AccordionPanel my={2} bg='forest.900' borderRadius={'md'}>
                            <Flex py={2} gap={{ base: 2, md: 10 }} flexWrap='wrap'>
                              <HStack w={{ base: 'full', md: 'auto' }}>
                                <Icon as={FaMapMarkerAlt} color='forest.400' />
                                <Text color='label.600' className={roboto.className}>
                                  {job.companyAddress}
                                </Text>
                              </HStack>
                              {job.companyLink &&
                                <HStack>
                                  <Icon as={FaLink} color='forest.400' />
                                  <Link color='label.600' className={roboto.className}>
                                    {job.companyLink!}
                                  </Link>
                                </HStack>
                              }
                            </Flex>
                            <Flex flexWrap={'wrap'} gap={2.5} py={4}>
                              {
                                job.technologies.map((tech, i) => {
                                  return (
                                    <Box
                                      bg='forest.700'
                                      key={i}
                                      borderRadius='full'
                                      px={3}
                                      py={0.5}
                                    >
                                      <Text color='label.200' className={roboto.className} fontSize={14}>{tech}</Text>
                                    </Box>
                                  )
                                })
                              }
                            </Flex>
                              {
                                job.description.map((description, index) => {
                                  return (
                                    <HStack pt='2.5' alignItems="top" key={index}>
                                      <Icon as={AiOutlineSwapRight} color="secondary.500" mt='1' />
                                      <Text color='label.400' className={roboto.className}>
                                        {description}
                                      </Text>
                                    </HStack>
                                  );
                                })
                              }
                          </AccordionPanel>
                        </AccordionItem>
                      )
                    })
                  }
                </Accordion>
              </VStack>
            </Box>
          </Center>
        </SlideFade>
      </Box>
    </Box>
  );
}