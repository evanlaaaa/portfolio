import { Box, HStack, keyframes, Text } from "@chakra-ui/react";
import ScribblesOne from "./scribbles/scribble1";
import { createRef, useCallback, useEffect, useState } from "react";
import ScribblesTwo from "./scribbles/scribble2";
import { motion } from "framer-motion";
import { IInfiniteSlideProps } from "../types/interface";
import ScribblesFour from "./scribbles/scribble4";

const InfiniteSlide = ({direction, offset = 0, isEven}: IInfiniteSlideProps) => {
  const itemWidth = 50;
  const itemSpacing = 200;

  const hStackRef = createRef<HTMLDivElement>();

  const [numberOfItem, setNumberOfItem] = useState(5)

  var keyframe = keyframes`
    0% { transform: translateX(0%); }
    99.99% { transform: translateX(-100%) }
  `

  const speed = '120s';

  const [animation, setAnimation] = useState(`${keyframe} ${speed} linear infinite`)

  const animationInitial = useCallback(() => {
    const screenWidth = window.innerWidth;
    let itemCount = 0;

    while(itemCount * (itemSpacing + itemWidth) < screenWidth) {
      itemCount++;
    }

    setNumberOfItem(itemCount+(8+offset))
  }, [numberOfItem])

  useEffect(() => {
    animationInitial()

    window.addEventListener("resize", animationInitial);

    return () => {
      window.removeEventListener("resize", animationInitial);
    }
  }, []);

  useEffect(() => {
    let temp;

    if(direction === "left") {
      temp = keyframes`
        0% { transform: translateX(-${((itemSpacing + itemWidth) * (2+offset))}px); }
        100% { transform: translateX(-${((itemSpacing + itemWidth) * (8+offset))}px) }
      `
    }
    else {
      temp = keyframes`
        0% { transform: translateX(-${((itemSpacing + itemWidth) * (8+offset))}px); }
        100% { transform: translateX(-${((itemSpacing + itemWidth) * (2+offset))}px) }
      `
    }

    setAnimation(`${temp} ${speed} linear infinite`)
  }, [hStackRef.current])
  
  return (
    <HStack spacing={`${itemSpacing}px`} ref={hStackRef} as={motion.div} animation={animation} w='full'>
      {
        [...Array(numberOfItem)].map((x, i) => 
          <SlideItem w={itemWidth} h={itemWidth} key={i}>
            {
              isEven 
                ? i % 3 === 0 ? (
                  <ScribblesOne fill='#68736B' key={i} transform={`rotate(${(i % 3) * 15 - 15} 0 0)`}/>
                ) : i % 3 === 1 ? (
                  <ScribblesFour fill='#68736B' key={i} transform={`rotate(${(i % 3) * 15 - 15} 0 0)`}/>
                ) : (
                  <ScribblesTwo fill='#68736B' key={i} transform={`rotate(${(i % 3) * 15 - 15} 0 0)`}/>
                )
                :
                  i % 3 === 0 ? (
                    <ScribblesTwo fill='#68736B' key={i} transform={`rotate(${(i % 3) * 15 - 15} 0 0)`}/>
                  ) : i % 3 === 1 ? (
                    <ScribblesOne fill='#68736B' key={i} transform={`rotate(${(i % 3) * 15 - 15} 0 0)`}/>
                  ) : (
                    <ScribblesFour fill='#68736B' key={i} transform={`rotate(${(i % 3) * 15 - 15} 0 0)`}/>
                  )
            }
          </SlideItem>
        )
      }
    </HStack>
  );
}

const SlideItem = ({w, h, ...rest}: {w: string, h: string} & any) => {
  return (
    <Box w={w} h={h} flexShrink={0} {...rest}>
      {rest.children}
    </Box>
  )
}

export default InfiniteSlide;