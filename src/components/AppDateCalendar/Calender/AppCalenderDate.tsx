import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import AppText from '../../AppText/AppText'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

interface Props extends BoxProps {
  handleDateClick: (date: Date) => void
  isSelected: boolean
  date: Date
  day: number
  validMaxDate?: Date | undefined
  dateRange?: {
    startDate: Date | undefined
    endDate: Date | undefined
  }
  tempRangeEndDate?: Date
  setTempRangeEndDate?: Dispatch<SetStateAction<Date | undefined>>
}

const AppCalenderDate: FC<Props> = ({
  date,
  isSelected,
  handleDateClick,
  day,
  validMaxDate,
  dateRange,
  setTempRangeEndDate,
  tempRangeEndDate,
}) => {
  const [bgColor, setBgColor] = useState('transparent')
  const [border, setBorder] = useState('1px solid transparent')

  useEffect(() => {
    const isInRange = () => {
      try {
        if (dateRange?.startDate && tempRangeEndDate) {
          return (
            (date >= dateRange?.startDate && date <= tempRangeEndDate) ||
            (date <= dateRange?.startDate && date >= tempRangeEndDate)
          )
        }
        return false
      } catch (e) {
        console.log(e)
        return false
      }
    }
    setBgColor(isInRange() ? '#F7CC45' : 'transparent')
  }, [tempRangeEndDate, isSelected])

  const onMouseEnterDate = (date: Date) => {
    setBorder('1px solid #fff')
    if (dateRange?.startDate) {
      setTempRangeEndDate && setTempRangeEndDate(date)
    }
  }

  const isValidDateRange = (date: Date): boolean => {
    if (!validMaxDate) {
      return true
    }

    return date < validMaxDate
  }

  const onDateClickHandler = () => {
    handleDateClick(date)
    setBgColor('#F7CC45')
  }

  return (
    <Box
      key={`as-${day}`}
      cursor={isValidDateRange(date) ? 'pointer' : 'default'}
      onClick={() => {
        isValidDateRange(date) && onDateClickHandler()
      }}
      transition='all 2s ease'
      onMouseEnter={() => isValidDateRange(date) && onMouseEnterDate(date)}
      onMouseLeave={() => isValidDateRange(date) && setBorder('1px solid transparent')}
      bg={bgColor}
      border={border}
    >
      <AppText
        textAlign='center'
        fontWeight={700}
        fontSize='13px'
        lineHeight='26px'
        color={isValidDateRange(date) ? '#fff' : '#595959'}
      >
        {day}
      </AppText>
    </Box>
  )
}

export default AppCalenderDate
