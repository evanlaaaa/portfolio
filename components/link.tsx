import NextLink from "next/link";
import { Box, Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

const Link: React.FC<any> = ({children, isActive, ...props}) => {
  return (
    <Box
      bg={isActive ? "gray.100": "none"} {...props}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.300"),
        cursor: "pointer"
      }}
    >
      {children}
    </Box>
  );
}

export default Link;