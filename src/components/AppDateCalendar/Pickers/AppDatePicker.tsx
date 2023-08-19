import React from 'react'
import { Box, ChakraProvider, useOutsideClick } from '@chakra-ui/react'
import { FC, ReactNode, useRef, useState } from 'react'
import AppDateCalendar from '../Calender/AppDateCalendar'
import { motion } from 'framer-motion'
import { getBoxPosition } from '../../../utils/layout'
import theme from '../../../theme'
import Fonts from '../../../theme/Fonts'

interface Appearance {
  backgroundColor?: string,
  borderColor? : string,
  monthDateTextColor?: string,
  nonMonthDateTextColor?: string,
  weekNameTextColor? : string,
  arrowsColor? : string,
  arrowsHoverColor?: string
  dateHoverBorder?: string
  dateHoverBackgroundColor?: string
}

interface Props {
  icon?: ReactNode
  onDateSelect: (date: Date) => void
  prePos?: {
    x?: number
    y?: number
  }
  appearance?: Appearance
}

const AppDatePicker: FC<Props> = ({ icon, onDateSelect, prePos }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()
  useOutsideClick({
    //@ts-ignore
    ref: ref,
    handler: () => setIsVisible(false),
  })

  const onCalenderIconClick = (e: any) => {
    const pos = getBoxPosition(e, 322, 312, prePos)
    setPos(pos)
    setIsVisible(!isVisible)
  }

  const onSelectDate = (date: Date) => {
    onDateSelect(date)
    setIsVisible(false)
  }

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition='.1s'
      >
        <Box onClick={(e) => onCalenderIconClick(e)} cursor='pointer'>
          {icon}
        </Box>
        {isVisible && (
          <Box
            // @ts-ignore
            ref={ref}
            position='absolute'
            // w='322px'
            // h='312px'
            top={pos.y}
            left={pos.x}
            bgColor='overlay-bg'
            padding='6px'
            boxShadow='0px 0px 5px rgba(0, 0, 0, 0.3)'
            borderRadius='4px'
            as={motion.div}
            initial={{ opacity: 0, scale: 0, y: '-300px' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition='.2s'
            zIndex={1}
          >
            <AppDateCalendar onDateSelect={(date) => onSelectDate(date)} />
          </Box>
        )}
      </Box>
    </ChakraProvider>
  )
}

export default AppDatePicker
