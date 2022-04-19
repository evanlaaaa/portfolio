import { Box, Flex, Text, Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export const TextBox = ({title, value, callback}: {title: string, value?: any, callback?: ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <Flex alignItems='center' justifyContent='center' flexWrap='wrap' w='full'>
      <Box>
        <Text color='gray.500' fontWeight='semibold' pr='5'>{title}</Text>
      </Box>
      <Box flex='1'>
        <Input
          value={value}
          onChange={callback}
        />
      </Box>
    </Flex>
  );
}