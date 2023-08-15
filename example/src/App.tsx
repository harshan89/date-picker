import React, { FC, useState } from 'react'
//@ts-ignore
import { AppDatePicker, AppDateRangePicker } from 'awesome-date-picker'

const App: FC = () => {
  return (
    <>
      <AppDatePicker
        onDateSelect={(date: Date) => alert(date)}
        children={<p>click to open date picker</p>}
        prePos={{ x: 0, y: 0 }}
      />
      <AppDateRangePicker
        id={1}
        onRangeSelect={(date1: Date, date2: Date) => alert(`date1 + date2`)}
        children={<p>click to open date range picker</p>}
        prePos={{ x: 0, y: 0 }}
      />
    </>
  )
}

export default App
