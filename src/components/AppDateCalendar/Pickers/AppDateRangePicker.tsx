import React from 'react'
import { Box, HStack, useOutsideClick } from '@chakra-ui/react'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import AppDateCalendar from '../Calender/AppDateCalendar'
import { addMonths } from 'date-fns'
import { motion } from 'framer-motion'
import { getBoxPosition } from '../../../utils/layout'

interface Props {
  children: ReactNode
  id: number
  onRangeSelect: (startDate: Date, endDate: Date, key: number) => void
  validMaxDate?: Date | undefined
  initialDate1?: Date
  initialDate2?: Date
  prePos?: {
    x?: number
    y?: number
  }
}

const AppDateRangePicker: FC<Props> = ({
  children,
  id,
  onRangeSelect,
  validMaxDate,
  initialDate1 = addMonths(new Date(), -1),
  initialDate2 = new Date(),
  prePos,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [tempRangeEndDate, setTempRangeEndDate] = useState<Date | undefined>()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef()
  useOutsideClick({
    //@ts-ignore
    ref: ref,
    handler: () => setIsVisible(false),
  })

  const onRangeSelectionComplete = () => {
    onRangeSelect(startDate!, endDate!, id)
  }

  useEffect(() => {
    if (startDate && endDate) {
      onRangeSelectionComplete()
      setStartDate(undefined)
      setEndDate(undefined)
      setIsVisible(false)
    }
  }, [startDate, endDate])

  const onSelectDate = (date: Date) => {
    if (!startDate) {
      setStartDate(date)
      return
    }
    if (!endDate) {
      setEndDate(date)
    }
  }

  const onCalenderIconClick = (e: any) => {
    const pos = getBoxPosition(e, 600, 312, prePos)
    setPos(pos)
    setIsVisible(!isVisible)
  }

  return (
    //@ts-ignore
    <Box cursor='pointer' ref={ref} zIndex={1}>
      <Box onClick={onCalenderIconClick}>{children}</Box>
      {isVisible && (
        <Box
          pos='absolute'
          bgColor='overlay-bg'
          w='600px'
          h='312px'
          padding='6px'
          boxShadow='0px 0px 5px rgba(0, 0, 0, 0.3)'
          borderRadius='4px'
          top={pos.y}
          left={pos.x}
          as={motion.div}
          initial={{ opacity: 0, scale: 0, y: '-300px' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition='.2s'
        >
          <HStack gap={0} spacing={0}>
            <AppDateCalendar
              onDateSelect={(date) => onSelectDate(date)}
              dateRange={{ startDate, endDate }}
              tempRangeEndDate={tempRangeEndDate}
              setTempRangeEndDate={setTempRangeEndDate}
              initDate={initialDate1}
              validMaxDate={validMaxDate}
            />
            <AppDateCalendar
              onDateSelect={(date) => onSelectDate(date)}
              dateRange={{ startDate, endDate }}
              tempRangeEndDate={tempRangeEndDate}
              setTempRangeEndDate={setTempRangeEndDate}
              initDate={initialDate2}
              validMaxDate={validMaxDate}
            />
          </HStack>
        </Box>
      )}
    </Box>
  )
}

export default AppDateRangePicker
