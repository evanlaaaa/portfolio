import { Box, Center, Flex, VStack, Image, Text, Spacer, HStack } from "@chakra-ui/react";
import { Project } from "../model/project";

// @ts-ignore
import ImgsViewer from "react-images-viewer";
import { useState } from "react";

export const ProjectCard = ({project, flip, ...pros}: {project: Project, flip: boolean}) => {
  const marginOverlapSize = "-20px";

  const [isOpen, setIsOpen] = useState(false);
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const onImageOpen = (e: any, i: number) : void => {
    setIsOpen(true);
    setCurrImageIndex(i);
  }

  const onImageClose = () : void => {
    setCurrImageIndex(0);
    setIsOpen(false);
  }

  const onClickNext = () : void => {
    setCurrImageIndex(currImageIndex + 1)
  }

  const onClickPrev = () : void => {
    setCurrImageIndex(currImageIndex - 1)
  }

  return (
    <Flex w='full' alignSelf="flex-end" wrap="wrap" direction="row" py='50'>
      <Center display={['inline', 'inline', flip ? 'inline' : 'none']}>
        <Image
          borderRadius={'md'}
          width={500}
          height={350}
          src={'/portfolio' + project.imageUrl}
          alt={project.projectName}
        />
      </Center>
      <Box my={5} flex='1'>
        <VStack ml={["0", "0", flip ? marginOverlapSize : "0"]} align={["flex-start", "flex-start", flip ? "flex-end" : "flex-start"]} flex='1' h='full'>
          <Text color="gray.700" fontSize="2xl" pb="2.5" fontWeight="semibold">{project.projectName}</Text>
            <Box bg='orange.400' w='full' p='4' textAlign={["left", "left", flip ? "right" : "left"]} borderRadius='md' boxShadow='md'>
              <Text fontSize='md' color='gray.100'>
                {project.projectDescription}
              </Text>
            </Box>
          <Spacer />
          {
            project.gallery &&
            <Flex flexWrap='wrap' justifyContent="flex-end">
              {
                project.gallery?.map((url, index) => {
                  return (
                    <Box
                      key={index}
                      p='2'
                      m='2'
                      border='1px' 
                      borderColor='gray.200'
                      cursor='pointer'
                    >
                      <Center>
                        <a
                          key={index}
                          onClick={(e) => onImageOpen(e, index)}
                        >
                          <Image 
                            key={index}
                            alt={url}
                            src={'/portfolio' + url} 
                            objectFit='cover'
                            boxSize='50px'
                          />
                        </a>
                      </Center>
                    </Box>
                  )
                })
              }
              <ImgsViewer
                imgs={project.gallery?.map((url, index) => {
                  return {
                    src: '/portfolio' + url
                  }
                })}
                currImg={currImageIndex}
                isOpen={isOpen}
                onClose={onImageClose}
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
              />
            </Flex>
          }
          <HStack py='5'>
            {
              project.technologies.map((tech, index) => {
                return (
                  <Box bg='orange.100' p='1.5' borderRadius='md' key={index}>
                    <Text fontSize='xs' color='gray.500' fontFamily="Roboto Mono">
                      {tech}
                    </Text>
                  </Box> 
                );
              })
            }
          </HStack>
          {
            project.external &&
            <HStack>
              {
                project.external.map((ext, index) => {
                  return (
                    <a
                      key={index}
                      href={ext.link}
                    >
                      {ext.icon}
                    </a>
                  )
                })
              }
            </HStack>
          }
        </VStack>
      </Box>
      <Center pb={['5', '5', '0']} ml={marginOverlapSize} zIndex='-1' display={['none', 'none', !flip ? 'inline' : 'none']}>
        <Image
          borderRadius={'md'}
          width={500}
          height={350}
          src={'/portfolio' + project.imageUrl}
          alt='Wai Choon profile picture'
        />
      </Center>
    </Flex>
  );
}