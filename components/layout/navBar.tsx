import { Box, Button, Container, HStack, Image, Slide, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState, useContext } from "react";
import { isMobile } from 'react-device-detect';
import Link from "../link";
import { NavigateContext } from ".";

export const NavBar = () => {
  const router = useRouter();
  let { asPath } = router;
    
  let y = 0;
  const [isTop, setIsTop] = useState(true);
  const [isUp, setIsUp] = useState(true);

  const [isHeaderActive, setIsHeaderActive] = useState(true);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [isShowcaseActive, setIsShowcaseActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const { aboutOffset, experienceOffset, showcaseOffset, contactOffset } = useContext(NavigateContext);

  const route = [
    {
      name: "Home",
      isActive: isHeaderActive,
      y: 0
    },
    {
      name: "About Me",
      isActive: isAboutActive,
      y: aboutOffset
    },
    {
      name: "Experience",
      isActive: isExperienceActive,
      y: experienceOffset
    },
    {
      name: "Showcase",
      isActive: isShowcaseActive,
      y: showcaseOffset
    },
    {
      name: "Contact",
      isActive: isContactActive,
      y: contactOffset
    }
  ]

  const scroll = useCallback(() => {
    setIsTop(window.scrollY == 0);
    setIsUp(window.scrollY > y ? false : true);

    setIsHeaderActive(window.scrollY >= 0 && window.scrollY <= aboutOffset);
    setIsAboutActive(window.scrollY > aboutOffset && window.scrollY <= experienceOffset);
    setIsExperienceActive(window.scrollY > experienceOffset && window.scrollY <= showcaseOffset);
    setIsShowcaseActive(window.scrollY > showcaseOffset && window.scrollY <= contactOffset);
    setIsContactActive(window.scrollY > contactOffset);

    y = window.scrollY;
  }, [aboutOffset, experienceOffset, showcaseOffset, contactOffset]);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  },[scroll])

  const onNavigatePressed = async (route: number) => {
    window.scrollTo({top: route, left: 0, behavior: 'smooth'});
  }

  return (
    <Slide
      direction="top"
      in={isUp}
      style={{ zIndex: 10 }}
    >
      <Box 
        py="3" 
        boxShadow={isUp ? isTop ? "none" : "md" : "none"} 
        top="0" 
        left="0" 
        w="100%"
        bg="white"
      >
        <Container maxW="container.lg" overflow={'auto'}>
          <HStack>
            {
              route.map((r, index) => {
                return (
                  <Link
                    key={index}
                    p={2}
                    rounded={"md"}
                    currentpath={asPath}
                    isActive={r.isActive}
                    onClick={() => onNavigatePressed(r.y)}
                    whiteSpace='nowrap'
                  >
                    {r.name}
                  </Link>
                );
              })
            }
          </HStack>
        </Container>
      </Box>
    </Slide>
  );
}