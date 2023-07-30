import { Box, Circle, VStack, Text, Image, Flex, Grid, Icon, Show } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NavigationBarLayout } from "../components/layout/navBar";
import { IProject } from "../types/interface";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import localFont from "next/font/local";
import ImageViewer from 'react-simple-image-viewer';
import React from "react";
import { projects } from "../json/project";

const oswald = localFont({ src: '../public/fonts/oswald/Oswald-VariableFont_wght.ttf'})

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
})

const Project: NextPage = () => {
  const [project, setProject] = useState<IProject>({
    id: 0,
    projectName: "",
    projectDescription: "",
    imageUrl: '',
    technologies: [],
    gallery: [],
  })
  const [isOpen, setIsOpen] = useState(false);
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      fetchProjects()
    }
  }, [router])

  const fetchProjects = async () => {
    const { id } = router.query
    let project: IProject = projects.find(p => p.id === Number(id))!
    setProject(project)
  }

  const onImageOpen = (e: any, i: number) : void => {
    document.body.style.overflowY = 'hidden'
    setIsOpen(true);
    setCurrImageIndex(i);
  }

  const onImageClose = () : void => {
    document.body.style.overflowY = 'auto'
    setIsOpen(false);
  }

  const handleBack = () => {
    router.replace({
      pathname: '/',
      query: {
        des: 'Showcase'
      }
    }, '/')
  }

  return (
    <Box minH='100vh' w='full' bg='primary.900'>
      <Show above='md'>
        <Circle size='60px' bg='forest.900' color='label.50' _hover={{ cursor: 'pointer' }} position='fixed' top='calc(64px + 64px)' left={'128px'} onClick={handleBack}>
          <FaArrowLeft />
        </Circle>
      </Show>
      <VStack>
        <NavigationBarLayout 
          isStatic
          isOutOfMainPage
        />
        <Flex alignItems='center' flexWrap='wrap' w={{ base: 'full', md: 'container.md'}} py='100px' px={{ base: 5, md: 0}} justifyContent='center'>
          <Text w='full' fontSize='5xl' className={oswald.className} color='label.50' textAlign='center'>
            {project.projectName}
            <Box as='span' pl={10}>
              {
                (project.external ?? []).map((ext, index) => {
                  return (
                    <a
                      key={index}
                      href={ext.link}
                    >
                      {
                        ext.isGithub
                          ? <Icon key={index} as={FaGithub} boxSize={35} color='label.200' transition='color 0.5s ease' _hover={{ color: 'label.50' }}/>
                          : <Icon key={index} as={FaExternalLinkAlt} size={35} color='label.200' transition='color 0.5s ease' _hover={{ color: 'label.50' }}/>
                      }
                    </a>
                  )
                })
              }
            </Box>
          </Text>
          <Box mt='60px' boxShadow='0 25px 50px -12px #e4e4e41c, 25px 0px 50px -12px #e4e4e41c,-25px 0px 50px -12px #e4e4e41c,0px -25px 50px -12px #e4e4e41c' borderRadius='md'>
            <Image
              alt={project.imageUrl}
              borderRadius='md'
              src={'/portfolio' + project.imageUrl}
            />
          </Box>
          <Box>
            <Text pt='60px' w={{ base: 'full', md: 'container.sm' }} fontSize='lg' className={roboto.className} color='label.300' textAlign={'center'} __css={{ 'text-wrap': 'balance' }}>
              {project.projectDescription}
            </Text>
          </Box>
          <Text pt='120px' w={{ base: 'full', md: 'container.sm' }} fontSize='3xl' className={oswald.className} color='label.50' textAlign={'center'} __css={{ 'text-wrap': 'balance' }}>
            Technologies used
          </Text>
          <Flex flexWrap={'wrap'} gap={2.5} pt='15px' justifyContent={'center'}>
            {
              project.technologies.map((tech, i) => {
                return (
                  <Box
                    bg='forest.700'
                    key={i}
                    borderRadius='full'
                    px={3}
                    py={0.5}
                  >
                    <Text color='label.200' className={roboto.className} fontSize={'md'}>{tech}</Text>
                  </Box>
                )
              })
            }
          </Flex>
          
          {project.gallery?.length &&
            <>
              <Text pt='120px' w='container.sm' fontSize='3xl' className={oswald.className} color='label.50' textAlign={'center'} __css={{ 'text-wrap': 'balance' }}>
                Gallery
              </Text>
              <Grid px={{ base: 0, md: 10}} templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}} gap={6} w='full' pt='15px'>
                {
                  (project.gallery ?? []).map((l, i) => {
                    return (
                      <Box key={i} onClick={(e) => onImageOpen(e, i)} _hover={{ cursor: 'pointer' }}>
                        <Image
                          alt={project.imageUrl}
                          borderRadius='md'
                          h='full'
                          w='full'
                          objectFit='cover'
                          src={'/portfolio' + l}
                        />
                      </Box>
                    )
                  })
                }
              </Grid>
            </>
          }
        </Flex>
      </VStack>
      {isOpen &&
        <ImageViewer
          src={ project.gallery!.map((v) => `/portfolio/${v}`) }
          currentIndex={ currImageIndex }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ onImageClose }
          backgroundStyle={{
            backgroundColor: '#00000080'
          }}
        />
      }
    </Box>
  )
}

export default Project

// 0 25px 50px -12px #e4e4e41c, 15px 0px 15px -5px #e4e4e41c, -15px 0px 15px -5px #e4e4e41c

{/* <HStack alignContent='start' w='full' justifyContent='space-between'>
              <Circle size='60px' bg='forest.900' color='label.50' _hover={{ cursor: 'pointer' }}>
                <FaArrowLeft />
              </Circle>
              <Text fontSize='5xl' className={oswald.className} color='label.50'>
                {project.projectName}
              </Text>
            </HStack> */}