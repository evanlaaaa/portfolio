import { RefObject, SetStateAction, createContext, useEffect, useState } from "react";
import { NavigationBarLayout } from "./navBar";
import { useRouter } from 'next/router';
import { NavigateContextType } from "../../types/interface";

export const NavigateContext = createContext<NavigateContextType>({
  aboutRef: null,
  setAboutRef: function (value: SetStateAction<RefObject<HTMLDivElement> | null>): void {
    throw new Error("Function not implemented.");
  },
  experienceRef: null,
  setExperienceRef: function (value: SetStateAction<RefObject<HTMLDivElement> | null>): void {
    throw new Error("Function not implemented.");
  },
  showcaseRef: null,
  setShowcaseRef: function (value: SetStateAction<RefObject<HTMLDivElement> | null>): void {
    throw new Error("Function not implemented.");
  },
  contactRef: null,
  setContactRef: function (value: SetStateAction<RefObject<HTMLDivElement> | null>): void {
    throw new Error("Function not implemented.");
  }
});

const Index = ({children} : {children: any}) => {
  const router = useRouter();
  let { asPath } = router;

  const [showNavigationBar, setShowNavigationBar] = useState(false)
  useEffect(() => {
    if (asPath != '/barter' && asPath != '/project') {
      setShowNavigationBar(true)
    }
    else {
      setShowNavigationBar(false)
    }
  }, [asPath])

  const [aboutRef, setAboutRef] = useState<RefObject<HTMLDivElement> | null>(null)
  const [experienceRef, setExperienceRef] = useState<RefObject<HTMLDivElement> | null>(null)
  const [showcaseRef, setShowcaseRef] = useState<RefObject<HTMLDivElement> | null>(null)
  const [contactRef, setContactRef] = useState<RefObject<HTMLDivElement> | null>(null)

  return (
    <NavigateContext.Provider value={{
      aboutRef, setAboutRef,
      experienceRef, setExperienceRef ,
      showcaseRef, setShowcaseRef,
      contactRef, setContactRef,
    }}>
      {showNavigationBar && <NavigationBarLayout />}
      {children}
    </NavigateContext.Provider>
  );
}

export default Index;