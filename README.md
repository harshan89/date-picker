# Awesome date picker

## Date picker

<img width="243" alt="Capture" src="https://github.com/harshan89/date-picker/assets/9652826/68fca3c1-e885-460f-99c3-70262000d35f">

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

<img width="451" alt="range-picker" src="https://github.com/harshan89/date-picker/assets/9652826/c12ab264-690a-4e5a-b0a8-1c27b5f469b4">

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