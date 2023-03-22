import { Dispatch, SetStateAction, createContext, useState } from "react";
import { NavBar } from "./navBar";
import { useRouter } from 'next/router';

type NavigateContextType = {
  aboutOffset: number,
  setAboutOffset: Dispatch<SetStateAction<number>>,
  
  experienceOffset: number,
  setExperienceOffset: Dispatch<SetStateAction<number>>,

  showcaseOffset: number,
  setShowcaseOffset: Dispatch<SetStateAction<number>>,

  contactOffset: number,
  setContactOffset: Dispatch<SetStateAction<number>>,
}

export const NavigateContext = createContext<NavigateContextType>({
  aboutOffset: 0,
  setAboutOffset: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  experienceOffset: 0,
  setExperienceOffset: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  showcaseOffset: 0,
  setShowcaseOffset: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  contactOffset: 0,
  setContactOffset: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  }
});

const Index = ({children} : {children: any}) => {
  const router = useRouter();
  let { asPath } = router;

  const [aboutOffset, setAboutOffset] = useState(0);
  const [experienceOffset, setExperienceOffset] = useState(0);
  const [showcaseOffset, setShowcaseOffset] = useState(0);
  const [contactOffset, setContactOffset] = useState(0);

  return (
    <NavigateContext.Provider value={{
      aboutOffset, setAboutOffset,
      experienceOffset, setExperienceOffset ,
      showcaseOffset, setShowcaseOffset,
      contactOffset, setContactOffset,
    }}>
      {asPath != '/barter' && <NavBar />}
      {children}
    </NavigateContext.Provider>
  );
}

export default Index;