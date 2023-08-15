import React, { FC } from 'react'
//@ts-ignore
import { AppDatePicker, AppDateRangePicker } from 'awesome-date-picker'

const App: FC = () => {
  return (
    <>
      <AppDatePicker
        onDateSelect={(date: Date) => alert(date)}
        icon={<p>click to open date picker</p>}
        prePos={{ x: 0, y: 0 }}
      />
      <AppDateRangePicker
        id={1}
        onRangeSelect={(date1: Date, date2: Date) => console.log(date1, date2)}
        icon={<p>click to open date range picker</p>}
        prePos={{ x: 0, y: 0 }}
      />
    </>
  )
}

export default App
