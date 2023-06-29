import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade, Spacer, Link } from "@chakra-ui/react"
import "@fontsource/roboto-mono";
import { useContext, useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { External } from "../model/external";
import { Project } from "../model/project";
import { ProjectCard } from "./projectCard";
import { isMobile } from 'react-device-detect';
import { NavigateContext } from "./layout";

export const Showcase = () => {

  const projects = [
    new Project({
      projectName: "MClinic",
      projectDescription: "A versatile clinic management system that helps users record all kinds of data. The goal of this system is to replace paper records and make the information completely digital. In addition to storing information, an appointment module is provided to help practitioners manage their patient's appointment schedules.",
      imageUrl: '/mclinic.png',
      technologies: ["React.js", "React Native", "Laravel", "TypeScript", "Pusher"],
      gallery: ["/cms/1.png", "/cms/2.png", "/cms/3.png", "/cms/4.png", "/cms/5.png", "/cms/6.png", "/cms/7.png"],
    }),
    new Project({
      projectName: "Vapr Identity Verification",
      projectDescription: "An identity authentication system in Vapr. Prior to registering with the system, end-users are required to undergo an identity verification process. Additionally, before making any purchases, end-users must undergo a biometric facial scan.",
      imageUrl: '/vapr.png',
      technologies: ["Java", "Flutter", "JSON", "Veriff", "PHP"],
      gallery: ["/vapr/1.png", "/vapr/2.png", "/vapr/3.png", "/vapr/4.png", "/vapr/5.png"]
    }),
    new Project({
      projectName: "Vendron OP",
      projectDescription: "A mobile application to facilitate user communication within Vendron Cloud ecosystem, which enables access and key information in real time",
      imageUrl: '/vop.png',
      technologies: ["Flutter", "PHP"],
      gallery: ["/vop/1.png", "/vop/2.png", "/vop/3.png", "/vop/4.png", "/vop/5.png", "/vop/6.png"]
    }),
    new Project({
      projectName: "BDO Parley & Stock Management",
      projectDescription: "This is a personal side project that I created in my free time. It is designed to calculate and manage complex barter activities in a game called Black Desert Online. The tool assists players in managing and calculating more efficiently, reducing the amount of time they need to spend.",
      imageUrl: '/bdo.png',
      technologies: ["React.js", "ChakraUI"],
      external: [
        new External({
          icon: <FaGithub size={25}/>,
          link: 'https://github.com/evanlaaaa/react-bdo-barter'
        })
      ]
    }),
    new Project({
      projectName: "Reverse Engineer MT-Framework *.ipr file",
      projectDescription: "Requested by the client, I enabled him to import 3D models based on asset placement (*.ipr) from Capcom's in-house game engine, MT-Framework. Using 010 Editor, I analyzed the binary file structure and extracted the relevant data. I then wrote custom import functions in Python to convert the extracted data into a format compatible with Blender's API.",
      imageUrl: '/ipr.png',
      technologies: ["Python", "010 Editor", "Blender"],
      gallery: ["/ipr/1.png", "/ipr/2.png"],
      external: [
        new External({
          icon: <FaGithub size={25}/>,
          link: 'https://github.com/evanlaaaa/MT-Framework-IPR'
        })
      ]
    }),
  ]

  const [toShow, setToShow] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const { showcaseOffset, setShowcaseOffset } = useContext(NavigateContext);

  const scroll = () => {
    if(window.scrollY > showcaseOffset && !toShow) {
      setToShow(true);
    }
  }

  const getPosition = () => {
    const offsetTop = boxRef.current?.offsetTop ?? 0;
    setShowcaseOffset(offsetTop - window.innerHeight + 500);
  }

  useEffect(() => {
    getPosition();
  },[])

  useEffect(() => {
    if(showcaseOffset != 0) {
      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", getPosition)
    }
  }, [showcaseOffset])

  return (
    <Box py='200px' w={["100%", "md", "container.lg"]} display='flex' alignSelf='flex-end' ref={boxRef}>
      <SlideFade in={toShow} offsetX={ isMobile ? 0 : 80} style={{'width': '100%'}}>
        <VStack w='full'>
          <Flex w='full' alignItems="center" >
            <Box pr='5'>
              <Text w='auto' fontWeight="bold" fontSize="2xl" color='orange.300'>Project Showcase</Text>
            </Box>
            <Box flex='1 0 auto'>
              <Divider />
            </Box>
          </Flex>
          {
            projects.map((project, index) => {
              return <ProjectCard project={project} flip={index % 2 == 0} key={index}/>
            })
          }
        </VStack>
      </SlideFade>
    </Box>
  );
}