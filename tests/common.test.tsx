import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { AppDatePicker, AppDateRangePicker } from '../src'

describe('Common render', () => {
  it('AppDatePicker renders without crashing', () => {
    render(
      <AppDatePicker
        onDateSelect={(date: Date) => alert(date)}
        icon={<p>click to open date picker</p>}
        prePos={{ x: 0, y: 0 }}
      />,
    )
  })
  it('AppDateRangePicker renders without crashing', () => {
    render(
      <AppDateRangePicker
        id={1}
        onRangeSelect={(date1: Date, date2: Date) => console.log(date1, date2)}
        icon={<p>click to open date range picker</p>}
        prePos={{ x: 0, y: 0 }}
      />,
    )
  })
})
