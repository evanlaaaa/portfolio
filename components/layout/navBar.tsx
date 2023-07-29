import { Slide } from "@chakra-ui/react";
import { useEffect, useState, useContext, useCallback } from "react";
import { NavigateContext } from ".";
import localFont from "next/font/local";
import NavigationBar from "../navigationBar";
import { INavigationLayoutProps, IRoute } from "../../types/interface";
import { useRouter } from "next/router";

export const NavigationBarLayout = ({isStatic = false, isOutOfMainPage = false}: INavigationLayoutProps) => {
  const [isUp, setIsUp] = useState(false);

  const [isHeaderActive, setIsHeaderActive] = useState(!isOutOfMainPage);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [isShowcaseActive, setIsShowcaseActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const { aboutRef, experienceRef, showcaseRef, contactRef } = useContext(NavigateContext);

  const router = useRouter()

  const route: IRoute[] = [
    {
      name: "Home",
      isActive: isHeaderActive,
    },
    {
      name: "About Me",
      isActive: isAboutActive,
    },
    {
      name: "Experience",
      isActive: isExperienceActive,
    },
    {
      name: "Showcase",
      isActive: isShowcaseActive,
    },
    {
      name: "Contact",
      isActive: isContactActive,
    }
  ]

  const scroll = useCallback(() => {
    if (
      aboutRef == null || experienceRef  == null || showcaseRef  == null || contactRef  == null ||
      aboutRef.current == null || experienceRef.current == null || showcaseRef.current == null || contactRef.current == null ||
      isOutOfMainPage
    ) return

    setIsHeaderActive(window.scrollY <= aboutRef!.current!.offsetTop - 300);
    setIsAboutActive(window.scrollY > aboutRef!.current!.offsetTop - 300 && window.scrollY <= experienceRef!.current!.offsetTop - 300);
    setIsExperienceActive(window.scrollY > experienceRef!.current!.offsetTop - 300 && window.scrollY <= showcaseRef!.current!.offsetTop - 300);
    setIsShowcaseActive(window.scrollY > showcaseRef!.current!.offsetTop - 300 && window.scrollY <= contactRef!.current!.offsetTop - 300);
    setIsContactActive(window.scrollY > contactRef!.current!.offsetTop - 300);

    if (!isStatic && window.scrollY < 500) {
      setIsUp(false)
    }
    else if (!isStatic && window.scrollY > 500) {
      setIsUp(true)
    }
    
  }, []);

  useEffect(() => {
    if(isOutOfMainPage) return
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  },[scroll])

  useEffect(() => {
    // trigger fade transition if refresh
    window.scrollTo({top: window.scrollY + 1})
    window.scrollTo({top: window.scrollY - 1})
  },[])

  const onNavigatePressed = async (route: string) => {
    if (isOutOfMainPage) {
      router.push('/', undefined, { shallow: true })
    }
    else {
      let top = 0
      switch(route) {
        case 'About Me': top = aboutRef!.current!.offsetTop; break;
        case 'Experience': top = experienceRef!.current!.offsetTop; break;
        case 'Showcase': top = showcaseRef!.current!.offsetTop; break;
        case 'Contact': top = contactRef!.current!.offsetTop; break;
      }
      window.scrollTo({top: top, left: 0, behavior: 'smooth'});
    }
  }

  return (
    isStatic
    ? <NavigationBar
        isStatic
        route={route}
        handleNavigation={onNavigatePressed}
      />
    :
    <Slide
      direction="top"
      in={isUp}
      style={{ zIndex: 10 }}
    >
      <NavigationBar
        route={route}
        handleNavigation={onNavigatePressed}
      />
    </Slide>
  );
}