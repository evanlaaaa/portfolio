import { Box, Flex, VStack, Image, Text, HStack, GridItem, Icon } from "@chakra-ui/react";

// @ts-ignore
import { useState } from "react";
import localFont from "next/font/local";
import { IProject } from "../types/interface";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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

export const ProjectCard = ({project, ...pros}: {project: IProject}) => {
  const router = useRouter();
  const marginOverlapSize = "-20px";

  const [isOpen, setIsOpen] = useState(false);
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [isImageZoom, setIsImageZoom] = useState(false)

  const onImageOpen = (e: any, i: number) : void => {
    setIsOpen(true);
    setCurrImageIndex(i);
  }

  const handleClick = (e: any) => {
    router.push(`/project/${project.id}`, undefined, { shallow: true})
  }

  const onImageClose = () : void => {
    setIsOpen(false);
  }

  const handleMouseEnter = () => {
    setIsImageZoom(true)
  }

  const handleMouseLeave = () => {
    setIsImageZoom(false)
  }

  return (
    <GridItem w='100%' borderRadius='md' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} _hover={{ cursor: 'pointer' }}>
      <VStack align='stretch' spacing={0} h='full' borderRadius='md'>
        <Box overflow='hidden' position='relative' borderTopRadius='md'>
          <Box zIndex={1} position='absolute' h='full' w='full' bg='black' opacity={isImageZoom ? 0.4 : 0} transition={'opacity 0.5s ease'} />
          <Image
            transform={`scale3d(${isImageZoom ? '1.1' : '1.0'},${isImageZoom ? '1.1' : '1.0'},1)`}
            transition='all ease 0.5s'
            w='full'
            h='228px'
            borderTopRadius='md'
            src={project.imageUrl}
            alt={project.projectName}
            objectFit='cover'
          />
          
        </Box>
        <Box py={5} px={8} bg='forest.900' flex={1} borderBottomRadius='md'>
          <VStack alignItems='start'>
            <Text color='label.200' fontSize='lg' className={roboto.className}>{project.projectName}</Text>
            <Flex flexWrap={'wrap'} gap={2.5} py={4}>
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
                      <Text color='label.200' className={roboto.className} fontSize={14}>{tech}</Text>
                    </Box>
                  )
                })
              }
            </Flex>
            {project.external &&
              <HStack justifyContent='end' w='full'>
                {
                  project.external.map((ext, index) => {
                    return (
                      ext.isGithub
                        ? <Icon key={index} as={FaGithub} boxSize={25} color='label.100'/>
                        : <Icon key={index} as={FaExternalLinkAlt} size={25} color='label.100'/>
                    )
                  })
                }
              </HStack>
            }
          </VStack>
        </Box>
      </VStack>
    </GridItem>
  );
}