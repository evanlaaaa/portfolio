import { Box, Text, Divider, Center, Flex, VStack, SlideFade, Grid, useSafeLayoutEffect } from "@chakra-ui/react"
import "@fontsource/roboto-mono";
import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ProjectCard } from "../projectCard";
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "../layout";
import { IProject } from "../../types/interface";
import localFont from "next/font/local";

const oswald = localFont({ src: '../../public/fonts/oswald/Oswald-VariableFont_wght.ttf'})

export const Showcase = () => {
  const [toShow, setToShow] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([])
  const boxRef = useRef<HTMLDivElement>(null);

  const { showcaseRef, setShowcaseRef } = useContext(NavigateContext);

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const response = await fetch("/portfolio/api/project");
    const data = await response.json();
    setProjects(data)
  }

  useSafeLayoutEffect(() => {
    getPosition();
  },[])

  useEffect(() => {
    if(showcaseRef != null) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [showcaseRef])

  const scroll = useCallback(() => {
    if (showcaseRef == null || showcaseRef.current == null) return

    if(window.scrollY > showcaseRef!.current!.offsetTop - 500 && !toShow) {
      setToShow(true);
    }
  }, [showcaseRef])

  const getPosition = () => {
    setShowcaseRef(boxRef)
  }

  return (
    <Box minH='100vh' w='full' bg='primary.900' ref={boxRef}>
      <Box h='full' w='full' display='flex' justifyContent={'center'}>
        <SlideFade in={toShow} offsetX={isMobile ? 0 : 80} style={{'width': '100%'}}>
          <Center py='calc(100vh / 3)'>
            <Box w={{ base: 'full', md: 'container.xl'}} display='flex' justifyContent={'start'} py='auto' px={{ base: 5, md: '20'}}>
              <VStack w='full' spacing={'32px'}>
                <Flex w='full' alignItems="center" >
                  <Box pr='5'>
                    <Text w='auto' fontWeight="bold" fontSize="2xl" color='secondary.300' className={oswald.className}>Project Showcase</Text>
                  </Box>
                  <Box flex='1 0 auto'>
                    <Divider />
                  </Box>
                </Flex>
                <Grid px={{ base: 0, md: 10}} templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}} gap={6} w='full'>
                  {
                    projects.map((project, index) => {
                      return <ProjectCard project={project} key={index}/>
                    })
                  }
                </Grid>
              </VStack>
            </Box>
          </Center>
        </SlideFade>
      </Box>
    </Box>
  );
}