import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { Box, Grid, HStack } from '@chakra-ui/react'
import { DAYS, MONTH_NAMES } from '../../../utils/constants'
import AppIcon from '../../AppIcon/AppIcon'
import { endOfMonth, format, getDay, getMonth, getYear, sub } from 'date-fns'
import AppCalenderDate from './AppCalenderDate'
import AppText from '../../AppText/AppText'

interface AppDateCalendarProps {
  onDateSelect: (date: Date) => void
  initDate?: Date
  dateRange?: {
    startDate: Date | undefined
    endDate: Date | undefined
  }
  validMaxDate?: Date | undefined
  tempRangeEndDate?: Date
  setTempRangeEndDate?: Dispatch<SetStateAction<Date | undefined>>
}

const AppDateCalendar: React.FC<AppDateCalendarProps> = ({
  onDateSelect,
  initDate,
  dateRange,
  validMaxDate,
  tempRangeEndDate,
  setTempRangeEndDate,
}) => {
  const [fullDate, setFullDate] = useState<Date>()
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>()
  const [selectedYear, setSelectedYear] = useState<number | undefined>()

  useEffect(() => {
    const initialDate = initDate ? initDate : new Date()
    const _selectedMonth = getMonth(initialDate)
    const _selectedYear = getYear(initialDate)

    setSelectedMonth(_selectedMonth)
    setSelectedYear(_selectedYear)
    setFullDate(initialDate)
  }, [])

  const getMonthName = useCallback(
    (month: number) => {
      return MONTH_NAMES[month]
    },
    [selectedMonth],
  )

  const onMonthChangeWithArrow = useCallback(
    (diff: number) => {
      if (selectedMonth !== undefined && diff) {
        let _selectedMonth = selectedMonth
        if (diff && diff > 0) {
          _selectedMonth = selectedMonth + 1 > 11 ? 0 : selectedMonth + 1
        }
        if (diff && diff < 0) {
          _selectedMonth = selectedMonth - 1 < 0 ? 11 : selectedMonth - 1
        }
        setSelectedMonth(_selectedMonth)
      }
    },
    [selectedMonth],
  )

  const onYearChangeWithArrow = useCallback(
    (diff: number) => {
      if (selectedYear !== undefined && diff) {
        let _selectedYear = selectedYear
        if (diff && diff > 0) {
          _selectedYear = selectedYear + 1
        }
        if (diff && diff < 0) {
          _selectedYear = selectedYear - 1
        }
        setSelectedYear(_selectedYear)
      }
    },
    [selectedYear],
  )

  const renderCalendarDays = () => {
    if (selectedMonth !== undefined && selectedYear !== undefined && fullDate !== undefined) {
      const days = []
      const monthStartFullDate = new Date(selectedYear, selectedMonth, 1)
      const monthStartDayInWeek = getDay(monthStartFullDate)
      const monthEndFullDate = endOfMonth(monthStartFullDate)
      const monthEndDate = endOfMonth(monthEndFullDate).getDate()
      const previousMonthStartDate = sub(monthStartFullDate, {
        months: 1,
      })
      const previousMonthEndDate = endOfMonth(previousMonthStartDate).getDate()
      const monthEndDayInWeek = getDay(monthEndFullDate)

      for (let i = monthStartDayInWeek; i > 0; i--) {
        days.push(
          <Box key={`pre-${i}`}>
            <AppText color='#595959' textAlign='center' fontWeight={700} fontSize='13px' lineHeight='26px'>
              {previousMonthEndDate - i + 1}
            </AppText>
          </Box>,
        )
      }

      for (let i = 1; i <= monthEndDate; i++) {
        const date = new Date(selectedYear, selectedMonth, i)
        const isSelected = format(fullDate, 'yyyy-MM-dd').toString() == format(date, 'yyyy-MM-dd').toString()

        days.push(
          <AppCalenderDate
            key={`date-${i}`}
            handleDateClick={onDateSelect}
            isSelected={isSelected}
            date={date}
            day={i}
            dateRange={dateRange}
            tempRangeEndDate={tempRangeEndDate}
            setTempRangeEndDate={setTempRangeEndDate}
            validMaxDate={validMaxDate}
          />,
        )
      }

      for (let x = monthEndDayInWeek, key = 1; x < 6; x++, key++) {
        days.push(
          <Box key={`post-${x}`}>
            <AppText color='#595959' textAlign='center' fontWeight={700} fontSize='13px' lineHeight='26px'>
              {key}
            </AppText>
          </Box>,
        )
      }

      return days
    }
    return null
  }

  return (
    <Box w='310px' h='300px' bgColor='#262626' pl='10px' pr='10px' pt='15px' pb='15px'>
      <HStack justify='space-between' pb='15px' pl='10px' pr='10px'>
        <AppIcon
          name='calenderDoubleArrow'
          fill='white'
          _hover={{ fill: '#F7CC45' }}
          width='12px'
          height='12px'
          cursor={'pointer'}
          onClick={() => onYearChangeWithArrow(-1)}
          transform='rotate(180deg)'
        />
        <AppIcon
          name={'chevronLeft'}
          fill='white'
          _hover={{ fill: '#F7CC45' }}
          width='12px'
          height='12px'
          cursor='pointer'
          onClick={() => onMonthChangeWithArrow(-1)}
        />
        <AppText
          color='#fff'
          fontWeight={500}
          fontSize='13px'
          lineHeight='26px'
          whiteSpace='nowrap'
          w='80%'
          textAlign='center'
        >
          {selectedMonth !== undefined &&
            selectedYear !== undefined &&
            `${getMonthName(selectedMonth)} ${selectedYear}`}
        </AppText>
        <AppIcon
          name={'chevronRight'}
          fill='white'
          _hover={{ fill: '#F7CC45' }}
          width='12px'
          height='12px'
          cursor={'pointer'}
          onClick={() => onMonthChangeWithArrow(1)}
        />
        <AppIcon
          name='calenderDoubleArrow'
          fill='white'
          _hover={{ fill: '#F7CC45' }}
          width='12px'
          height='12px'
          cursor={'pointer'}
          onClick={() => onYearChangeWithArrow(1)}
        />
      </HStack>
      <Grid templateColumns='repeat(7, 1fr)' gap={2}>
        {DAYS.map((day, index) => (
          <AppText
            textAlign='center'
            color='#fff'
            key={`day-${index}`}
            fontWeight={700}
            fontSize='13px'
            lineHeight='26px'
          >
            {day}
          </AppText>
        ))}
        {renderCalendarDays()}
      </Grid>
    </Box>
  )
}

export default AppDateCalendar
