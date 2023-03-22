import { createContext, useState } from "react";
import { NavBar } from "./navBar";
import { useRouter } from 'next/router';

export const NavigateContext = createContext({});

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