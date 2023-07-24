import { Box, Link, Divider, VStack, Flex, Tab, TabList, TabPanel, TabPanels, Icon, Tabs, Text, HStack, SlideFade, Center, Spacer, useDisclosure, Collapse, Accordion, AccordionButton, AccordionIcon, AccordionItem, createMultiStyleConfigHelpers, AccordionPanel, defineStyle, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai'
import { Job } from '../../model/job';
import { isMobile } from 'react-device-detect';
import { NavigateContext } from '../layout';
import localFont from 'next/font/local';
import { ExperienceCard } from '../experienceCard';
import { accordionAnatomy } from '@chakra-ui/anatomy'
import { FaLink, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaMapPin } from 'react-icons/fa';
import { IJob } from '../../model/interfaces';
/* 
const experiences = [
  new Job({
    companyName: "V6 Technology",
    positionTitle: "Software Engineer",
    companyAddress: "V6 Technology",
    companyLink: "https://www.v6technology.net/",
    dateRange: "Aug 2022 - Present",
    description: [
      "Migrated existing Laravel Blade views to React.js using Inertia.js, as well as revamped the UI/UX, providing a smoother and more interactive user experience",
      "Established CI pipelines using GitLab CI to automate testing for Flutter app",
      "Developed interactive Kline charts from scratch in Flutter to meet client’s requirement",
      "Wrote automated unit and integration test using Appium and Mocha for their existed Kotlin and Swift app",
      "Collaborate with the UI/UX team to translate design wireframes into high-quality UIs and improve the UI/UX of the existing Swift app with UIKit",
      "Building mobile apps using Flutter that interact with client's new extended fintech services"
    ]
  }),
  new Job({
    companyName: "Silkron",
    positionTitle: "Software Engineer",
    companyAddress: "Silkron",
    companyLink: "https://www.silkron.com/",
    dateRange: "Jan 2021 - Jul 2022",
    description: [
      "Designing and building a mobile application to facilitate user communication within Vendron Cloud ecosystem",
      "Worked on integration with third-party identity verification services, built and designed new user registration flow",
      "Wrote integration tests for automated UI testing",
      "Built graphs using fl_chart library for visualizing customers’ sales metrics"
    ]
  }),
  new Job({
    companyName: "2nd Freelance",
    positionTitle: "Full-stack Web Developer",
    companyAddress: "B-Three Enterprise",
    dateRange: "Apr 2018 - Aug 2018",
    description: [
      "Built clinic management system which helped clients save 10% of their monthly expenses",
      "Worked on integration with third-party notification service",
      "Built a mobile application to facilitate internal user’s communication with Appointment module",
    ]
  }),
  new Job({
    companyName: "1st Freelance",
    positionTitle: "Full-stack Web Developer",
    companyAddress: "Sunway Idealite",
    dateRange: "Jan 2018 - Mar 2018",
    description: [
      "Built a web-based restaurant POS system that helped speed up the ordering process by 40%",
      "Designed and implemented an algorithm to resolve \"promotion\" for the POS",
    ]
  })
] */

const experiences: IJob[] = [
  {
    companyName: "V6 Technology",
    companyAddress: "Bukit Mertajam, Malaysia",
    companyLink: "https://www.v6technology.net/",
    positionTitle: "Software Engineer",
    dateRange: "Aug 2022 - Present",
    description: [
      "Migrated existing Laravel Blade views to React.js using Inertia.js, as well as revamped the UI/UX, providing a smoother and more interactive user experience",
      "Established CI pipelines using GitLab CI to automate testing for Flutter app",
      "Developed interactive Kline charts from scratch in Flutter to meet client’s requirement",
      "Wrote automated unit and integration test using Appium and Mocha for their existed Kotlin and Swift app",
      "Collaborate with the UI/UX team to translate design wireframes into high-quality UIs and improve the UI/UX of the existing Swift app with UIKit",
      "Building mobile apps using Flutter that interact with client's new extended fintech services"
    ],
    technologies: [
      "React.js", "Inertia.js", "Flutter", "Laravel", "Swift", "UIKit", "Appium", "TypeScript", "CI/CD", "Kotlin", "PHP", "Dart"
    ]
  },
  {
    companyName: "Silkron",
    companyAddress: "Penang, Malaysia",
    companyLink: "https://www.silkron.com/",
    positionTitle: "Software Engineer",
    dateRange: "Jan 2021 - Jul 2022",
    description: [
      "Designing and building a mobile application to facilitate user communication within Vendron Cloud ecosystem",
      "Worked on integration with third-party identity verification services, built and designed new user registration flow",
      "Wrote integration tests for automated UI testing",
      "Built graphs using fl_chart library for visualizing customers’ sales metrics"
    ],
    technologies: [
      "Java", "Flutter", "Veriff", "PHP"
    ]
  },
  {
    companyName: "Freelance",
    companyAddress: "Remote",
    positionTitle: "Full-stack Web Developer",
    dateRange: "Apr 2018 - Aug 2018",
    description: [
      "Built clinic management system which helped clients save 10% of their monthly expenses",
      "Worked on integration with third-party notification service",
      "Built a mobile application to facilitate internal user’s communication with Appointment module",
    ],
    technologies: [
      "Javascript", "JQuery", "PHP", "Pushy", "SQL"
    ]
  },
  {
    companyName: "Freelance",
    companyAddress: "Remote",
    positionTitle: "Full-stack Web Developer",
    dateRange: "Jan 2018 - Mar 2018",
    description: [
      "Built a web-based restaurant POS system that helped speed up the ordering process by 40%",
      "Designed and implemented an algorithm to resolve \"promotion\" for the POS",
    ],
    technologies: [
      "Javascript", "JQuery", "PHP", "SQL"
    ]
  }
]

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
  const boxRef = useRef<HTMLDivElement>(null);

  const { experienceOffset, setExperienceOffset } = useContext(NavigateContext);

  const scroll = () => {
    if(window.scrollY > experienceOffset && !toShow) {
      setToShow(true);
    }
  }

  const getPosition = () => {
    const offsetTop = boxRef.current?.offsetTop ?? 0;
    setExperienceOffset(offsetTop - window.innerHeight + 500);
  }

  useEffect(() => {
    getPosition();
  },[])

  useEffect(() => {
    if(experienceOffset != 0) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [experienceOffset])

  return (
    <Box minH='100vh' w='full' bg='#0d1c26' ref={boxRef}>
      <Box h='full' w='full' display='flex' justifyContent={'center'} >
        <SlideFade in={toShow} offsetX={ isMobile ? 0 : -80} style={{width: '100%', height: '100%'}}>
          <Center pt='calc(100vh / 3)'>
            <Box w={['container.lg']} display='flex' justifyContent={'center'} py='auto'>
              <VStack w='container.md'>
                <Flex w='full' alignItems="center">
                  <Box pr='5'>
                    <Text w='auto' fontWeight="bold" fontSize="2xl" color='#D9895B' className={oswald.className}>{"Where I\'ve worked"}</Text>
                  </Box>
                  <Box flex='1 0 auto'>
                    <Divider />
                  </Box>
                </Flex>
                <Accordion w='container.sm' allowToggle pt={5} pb={20} defaultIndex={[0]}>
                  {
                    experiences.map((job, index) => {
                      return (
                        // <ExperienceCard job={job} />
                          <AccordionItem border='none' my={3}>
                            <AccordionButton bgColor='#578491' py={3} px={5} borderRadius={'md'} className={roboto.className} _hover={{
                              bgColor: 'none'
                            }}>
                              <HStack w='full' borderRadius={'xl'} className={roboto.className}>
                                <Box>
                                  {job.positionTitle} @ {job.companyName}
                                </Box>
                                <Spacer />
                                <Box>
                                  {job.dateRange}
                                </Box>
                                <AccordionIcon />
                              </HStack>
                            </AccordionButton>
                            <AccordionPanel my={2} bg='#192b33' borderRadius={'md'}>
                              <HStack py={2}>
                                <HStack>
                                  <Icon as={FaMapMarkerAlt} color='#709faa' />
                                  <Text color='#687A6EBD' className={roboto.className}>
                                    {job.companyAddress}
                                  </Text>
                                  <Spacer />
                                  {job.companyLink &&
                                    <>
                                      <Icon as={FaLink} color='#709faa' />
                                      <Link color='#687A6EBD' className={roboto.className}>
                                        {job.companyLink!}
                                      </Link>
                                    </>
                                  }
                                </HStack>
                              </HStack>
                              <Flex flexWrap={'wrap'} gap={2.5} py={4}>
                                {
                                  job.technologies.map((tech, i) => {
                                    return (
                                      <Box
                                        bg='#426571'
                                        key={i}
                                        borderRadius='full'
                                        px={3}
                                        py={0.5}
                                      >
                                        <Text className={roboto.className} fontSize={14}>{tech}</Text>
                                      </Box>
                                    )
                                  })
                                }
                              </Flex>
                              {/* <Box bg='tomato'> */}
                                {
                                  job.description.map((description, index) => {
                                    return (
                                      <HStack pt='2.5' alignItems="top" key={index}>
                                        <Icon as={AiOutlineSwapRight} color="#D9895B" mt='1' />
                                        <Text color='#687A6E' className={roboto.className}>
                                          {description}
                                        </Text>
                                      </HStack>
                                    );
                                  })
                                }
                              {/* </Box> */}
                            </AccordionPanel>
                          </AccordionItem>
                      )
                    })
                  }
                </Accordion>
                {/* <HStack pt='5' align="flex-start" w='full'>
                  <Tabs orientation='vertical' variant='unstyled'>
                    <TabList>
                      {
                        experiences.map((job, index) => {
                          return (
                            <Tab 
                              key={index}
                              borderLeft='2px'
                              borderColor='gray.100'
                              _focus={{'boxShadow' : 'none'}}
                              _selected={{'borderLeft': '2px', 'borderColor': 'orange.300'}}
                            >
                                {job.companyName}
                            </Tab>
                          );
                        })
                      }
                    </TabList>

                    <TabPanels pl='10'>
                      {
                        experiences.map((job, index) => {
                          return (
                            <TabPanel key={index}>
                              <Box>
                                <Text color="gray.700" fontSize="xl" fontWeight='semibold'>
                                  {job.positionTitle + " @ "}
                                  {
                                    job.companyLink == ""
                                    ? job.companyAddress
                                    : <Link 
                                        href="https://www.silkron.com/"
                                        color="orange.300"
                                      >
                                        {job.companyAddress}
                                      </Link>
                                  }
                                </Text>
                                  <Text color="gray.500" fontSize='sm'>
                                    {job.dateRange}
                                  </Text>
                                  {
                                    job.description.map((description, index) => {
                                      return (
                                        <HStack pt='2.5' alignItems="top" key={index}>
                                          <Icon as={AiOutlineSwapRight} color='orange.500' mt='1' />
                                          <Text color="gray.500">
                                            {description}
                                          </Text>
                                        </HStack>
                                      );
                                    })
                                  }
                              </Box>
                            </TabPanel>
                          );
                        })
                      }
                    </TabPanels>
                  </Tabs>
                </HStack> */}
              </VStack>
            </Box>
          </Center>
        </SlideFade>
      </Box>
    </Box>
  );
}