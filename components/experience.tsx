import { Box, Link, Divider, VStack, Flex, Tab, TabList, TabPanel, TabPanels, Icon, Tabs, Text, HStack, SlideFade } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai'
import { Job } from '../model/job';
import { isMobile } from 'react-device-detect';
import { NavigateContext } from './layout';

export const Experience = () => {
  const experiences = [
    new Job({
      jobName: "V6 Technology",
      jobTitle: "Software Engineer",
      jobCompany: "V6 Technology",
      companyLink: "https://www.v6technology.net/",
      dateRange: "Aug 2022 - Present",
      description: [
        "Developed interactive Kline charts from scratch in Flutter to meet client’s requirement",
        "Wrote automated unit and integration test using Appium and Mocha for their existed Kotlin and Swift app",
        "Collaborate with UI/UX team and translate design wireframes into high quality UIs",
        "Improved UI/UX of existed app with Swift UIKit",
        "Building mobile apps using Flutter that interact with client's new extended fintech services"
      ]
    }),
    new Job({
      jobName: "Silkron",
      jobTitle: "Software Engineer",
      jobCompany: "Silkron",
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
      jobName: "2nd Freelance",
      jobTitle: "Full-stack Web Developer",
      jobCompany: "B-Three Enterprise",
      dateRange: "Apr 2018 - Aug 2018",
      description: [
        "Built clinic management system which helped clients save 10% of their monthly expenses",
        "Worked on integration with third-party notification service",
        "Built a mobile application to facilitate internal user’s communication with Appointment module",
      ]
    }),
    new Job({
      jobName: "1st Freelance",
      jobTitle: "Full-stack Web Developer",
      jobCompany: "Sunway Idealite",
      dateRange: "Jan 2018 - Mar 2018",
      description: [
        "Built a web-based restaurant POS system that helped speed up the ordering process by 40%",
        "Designed and implemented an algorithm to resolve \"promotion\" for the POS",
      ]
    })
  ]

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
    setExperienceOffset(offsetTop + 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", getPosition)
    getPosition();
    return () => window.removeEventListener("scroll", scroll);
  },[])

  return (
    <Box py='200px' w={["100%", "md", "container.md"]} display='flex' h='auto' ref={boxRef}>
      <SlideFade in={toShow} offsetX={ isMobile ? 0 : -80}>
        <VStack w='full'>
          <Flex w='full' alignItems="center">
            <Box pr='5'>
              <Text w='auto' fontWeight="bold" fontSize="2xl" color='orange.300'>{"Where I\'ve worked"}</Text>
            </Box>
            <Box flex='1 0 auto'>
              <Divider />
            </Box>
          </Flex>
          <HStack pt='5' align="flex-start" w='full'>
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
                          {job.jobName}
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
                            {job.jobTitle + " @ "}
                            {
                              job.companyLink == ""
                              ? job.jobCompany
                              : <Link 
                                  href="https://www.silkron.com/"
                                  color="orange.300"
                                >
                                  {job.jobCompany}
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
          </HStack>
        </VStack>
      </SlideFade>
    </Box>
  );
}