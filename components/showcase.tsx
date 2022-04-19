import { Box, Text, Divider, Image, Center, Flex, VStack, List, ListItem, ListIcon, HStack, SlideFade, Spacer, Link } from "@chakra-ui/react"
import "@fontsource/roboto-mono";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { External } from "../model/external";
import { Project } from "../model/project";
import { ProjectCard } from "./projectCard";

export const Showcase = () => {

  const projects = [
    new Project({
      projectName: "MClinic",
      projectDescription: "A versatile clinic management system that helps users record all kinds of data. The goal of this system is to replace paper records and make the information completely digital. In addition to storing information, an appointment module is provided to help practitioners manage their patient's appointment schedules.",
      imageUrl: '/mclinic.png',
      technologies: ["React", "React Native", "Laravel", "TypeScript", "Pusher"],
      gallery: ["cms/1.png", "cms/2.png", "cms/3.png", "cms/4.png", "cms/5.png", "cms/6.png", "cms/7.png"],
    }),
    new Project({
      projectName: "Vapr Identity Verification",
      projectDescription: "An identity authentication system in Vapr. Before end-users can register to the system, they need to go through an identity verification process. End users also need to go through a biometric facial scan before they can make any purchases.",
      imageUrl: '/vapr.png',
      technologies: ["Java", "Flutter", "JSON", "Veriff", "PHP"],
      gallery: ["vapr/1.png", "vapr/2.png", "vapr/3.png", "vapr/4.png", "vapr/5.png"]
    }),
    new Project({
      projectName: "Vendron OP",
      projectDescription: "A mobile application to facilitate user communication within Vendron Cloud ecosystem, which enables access and key information in real time",
      imageUrl: '/vop.png',
      technologies: ["Flutter", "PHP"],
      gallery: ["vop/1.png", "vop/2.png", "vop/3.png", "vop/4.png", "vop/5.png", "vop/6.png"]
    }),
    new Project({
      projectName: "BDO Parley & Stock Management",
      projectDescription: "This is a personal side project that I created in my free time. It is used to calculate and manage complex barter activities in a game called Black Desert Online. It helps players to manage and calculate better so that they don't have to spend too much time.",
      imageUrl: '/bdo.png',
      technologies: ["React", "Bootstrap"],
      external: [
        new External({
          icon: <FaGithub size={25}/>,
          link: 'https://github.com/evanlaaaa/react-bdo-barter'
        })
      ]
    }),
  ]

  const [toShow, setToShow] = useState(false);

  const scroll = () => {
    if(window.scrollY > 2200) {
      setToShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  },[])

  return (
    <Box py='200px' w={["100%", "md", "container.lg"]} display='flex' alignSelf='flex-end'>
      <SlideFade in={toShow} offsetX={80} style={{'width': '100%'}}>
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
              return <ProjectCard project={project} flip={index % 2 == 0} />
            })
          }
        </VStack>
      </SlideFade>
    </Box>
  );
}