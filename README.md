# Awesome date picker

[Live Demo](https://harshan89.github.io/date-picker)

## Installation 
_npm i awesome-date-picker --save_

# How to use Awesome date picker

## Date picker

<img width="243" alt="awesome-date-picker" src="https://github.com/harshan89/date-picker/assets/9652826/68fca3c1-e885-460f-99c3-70262000d35f">

### Props

#### onDateSelect
Callback function on date select

#### children
The icon need to pass for calander render

#### prePos
This is optional prop this will be usefull if you need to pre define where to render the date picker.

```jsx
<AppDatePicker
  onDateSelect={(date:Date) => {}}
  children={<Icon />}
  prePos={{x?: number, y?: number}}
/>
```

## Date range picker

<img width="453" alt="awedome-date-range-picker" src="https://github.com/harshan89/date-picker/assets/9652826/ecd193d9-e645-4ea1-b397-654eabfadda3">

#### onRangeSelect
Callback function on date select

#### children
The icon need to pass for calander render

#### prePos
This is optional prop this will be usefull if you need to pre define where to render the date range picker.

```jsx
const onRangeSelect = (startDate: Date, endDate: Date, key: number) => {
  console.log('startDate', startDate)
  console.log('endDate', endDate)
};

<AppDateRangePicker
  id=""
  children={<Icon />}
  onRangeSelect={onRangeSelect}
  prePos={{x?: number, y?: number}}
/>
```

Contact me if you stuck anywhere  **harshanweb@gmail.com** ✨