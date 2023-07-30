import { Dispatch, RefObject, SetStateAction } from "react"

export interface IInfiniteSlideProps {
  direction: "left" | "right",
  offset?: number,
  isEven?: boolean
}

export interface IScribbleProps {
  fill: string, 
  w?: string, 
  h?: string, 
  transform?: string,
  animation?: string,
  isAnimate?: boolean
}

export interface IProject {
  id: number,
  projectName: string,
  projectDescription: string,
  imageUrl: string,
  technologies: Array<string>,
  gallery?: Array<string>,
  external?: Array<IExternal>,
}

export interface IExternal {
  isGithub: boolean,
  link: string
}

export interface IRoute {
  name: string,
  isActive: boolean,
  y?: number
}

export interface INavigationBarProps {
  isStatic?: boolean,
  route: IRoute[],
  handleNavigation: (name: string) => void
}

export interface INavigationLayoutProps {
  isStatic?: boolean,
  isOutOfMainPage?: boolean,
}

export type NavigateContextType = {
  aboutRef: RefObject<HTMLDivElement | null> | null,
  setAboutRef: Dispatch<SetStateAction<RefObject<HTMLDivElement> | null>>
  
  experienceRef: RefObject<HTMLDivElement | null> | null,
  setExperienceRef: Dispatch<SetStateAction<RefObject<HTMLDivElement> | null>>

  showcaseRef: RefObject<HTMLDivElement | null> | null,
  setShowcaseRef: Dispatch<SetStateAction<RefObject<HTMLDivElement> | null>>

  contactRef: RefObject<HTMLDivElement | null> | null,
  setContactRef: Dispatch<SetStateAction<RefObject<HTMLDivElement> | null>>
}

export interface IJob {
  companyName: string;
  companyLink?: string;
  companyAddress: string;
  positionTitle: string;
  dateRange: string;
  description: Array<string>;
  technologies: Array<string>
}