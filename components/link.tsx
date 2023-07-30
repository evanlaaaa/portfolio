import NextLink from "next/link";
import { Box, Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

const Link: React.FC<any> = ({children, isActive, ...props}) => {
  return (
    <Box
      {...props}
      color={isActive ? 'label.50': props.color}
      _hover={{
        textDecoration: "none",
        color: 'label.100',
        cursor: "pointer"
      }}
      transition={'color ease 0.4s'}
    >
      {children}
    </Box>
  );
}

export default Link;