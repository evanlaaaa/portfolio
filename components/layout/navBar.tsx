import { Box, Button, Container, HStack, Image, Slide, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import Link from "../link";

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

  const route = [
    {
      name: "Home",
      isActive: isHeaderActive,
      y: 0
    },
    {
      name: "About Me",
      isActive: isAboutActive,
      y: isMobile ? 980 : 1000
    },
    {
      name: "Experience",
      isActive: isExperienceActive,
      y: isMobile ? 2100 : 1900
    },
    {
      name: "Showcase",
      isActive: isShowcaseActive,
      y: isMobile ? 3060 : 2700
    },
    {
      name: "Contact",
      isActive: isContactActive,
      y: isMobile ? 7993 : 5300
    }
  ]

  const scroll = useCallback(() => {
    if(!isMobile) {
      setIsTop(window.scrollY == 0);
      setIsUp(window.scrollY > y ? false : true);

      setIsHeaderActive(window.scrollY >= 0 && window.scrollY <= 500);
      setIsAboutActive(window.scrollY > 700 && window.scrollY <= 1500);
      setIsExperienceActive(window.scrollY > 1500 && window.scrollY <= 2200);
      setIsShowcaseActive(window.scrollY > 2200 && window.scrollY <= 5100);
      setIsContactActive(window.scrollY > 5100);
    }
    else {
      setIsTop(window.scrollY == 0);
      setIsUp(window.scrollY > y ? false : true);

      setIsHeaderActive(window.scrollY >= 0 && window.scrollY <= 880);
      setIsAboutActive(window.scrollY > 880 && window.scrollY <= 2000);
      setIsExperienceActive(window.scrollY > 2000 && window.scrollY <= 2960);
      setIsShowcaseActive(window.scrollY > 2960 && window.scrollY <= 7500);
      setIsContactActive(window.scrollY > 7500);
    }

    y = window.scrollY;
  }, []);

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