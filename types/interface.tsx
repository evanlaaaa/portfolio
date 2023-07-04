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