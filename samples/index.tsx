import React from 'react'
import ReactDOM from 'react-dom/client'
import { FaCalendar } from 'react-icons/fa'
import { AppDatePicker, AppDateRangePicker } from 'awesome-date-picker'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppDatePicker onDateSelect={(date: Date) => alert(date)} icon={<FaCalendar />} prePos={{ x: 0, y: 0 }} />
    <AppDateRangePicker
      id={1}
      onRangeSelect={(date1: Date, date2: Date) => console.log(date1, date2)}
      icon={<FaCalendar />}
      prePos={{ x: 0, y: 0 }}
    />
  </React.StrictMode>,
)
