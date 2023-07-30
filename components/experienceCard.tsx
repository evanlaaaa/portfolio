import { Box, Collapse, HStack, Icon, Spacer, useDisclosure } from "@chakra-ui/react"
import { IJob } from "../model/interfaces"
import localFont from "next/font/local"
import { FaArrowDown, FaCaretDown, FaCaretUp, FaCartArrowDown } from "react-icons/fa"

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
})

export const ExperienceCard = ({job}: {job: IJob}) => {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <HStack bgColor='#324E59' py={3} px={5} borderRadius={'xl'} className={roboto.className} onClick={onToggle}>
        <Box>
          {job.positionTitle} @ {job.companyName}
        </Box>
        <Spacer />
        <Box>
          {job.dateRange}
        </Box>
        <Icon as={!isOpen ? FaCaretDown : FaCaretUp} />
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Box>Hi</Box>
      </Collapse>
    </Box>
  )
}