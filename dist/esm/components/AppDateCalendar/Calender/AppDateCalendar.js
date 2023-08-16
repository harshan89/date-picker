import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid, HStack } from '@chakra-ui/react';
import { DAYS, MONTH_NAMES } from '../../../utils/constants';
import AppIcon from '../../AppIcon/AppIcon';
import { endOfMonth, format, getDay, getMonth, getYear, sub } from 'date-fns';
import AppCalenderDate from './AppCalenderDate';
import AppText from '../../AppText/AppText';
var AppDateCalendar = function (_a) {
    var onDateSelect = _a.onDateSelect, initDate = _a.initDate, dateRange = _a.dateRange, validMaxDate = _a.validMaxDate, tempRangeEndDate = _a.tempRangeEndDate, setTempRangeEndDate = _a.setTempRangeEndDate;
    var _b = useState(), fullDate = _b[0], setFullDate = _b[1];
    var _c = useState(), selectedMonth = _c[0], setSelectedMonth = _c[1];
    var _d = useState(), selectedYear = _d[0], setSelectedYear = _d[1];
    useEffect(function () {
        var initialDate = initDate ? initDate : new Date();
        var _selectedMonth = getMonth(initialDate);
        var _selectedYear = getYear(initialDate);
        setSelectedMonth(_selectedMonth);
        setSelectedYear(_selectedYear);
        setFullDate(initialDate);
    }, []);
    var getMonthName = useCallback(function (month) {
        return MONTH_NAMES[month];
    }, [selectedMonth]);
    var onMonthChangeWithArrow = useCallback(function (diff) {
        if (selectedMonth !== undefined && diff) {
            var _selectedMonth = selectedMonth;
            if (diff && diff > 0) {
                _selectedMonth = selectedMonth + 1 > 11 ? 0 : selectedMonth + 1;
            }
            if (diff && diff < 0) {
                _selectedMonth = selectedMonth - 1 < 0 ? 11 : selectedMonth - 1;
            }
            setSelectedMonth(_selectedMonth);
        }
    }, [selectedMonth]);
    var onYearChangeWithArrow = useCallback(function (diff) {
        if (selectedYear !== undefined && diff) {
            var _selectedYear = selectedYear;
            if (diff && diff > 0) {
                _selectedYear = selectedYear + 1;
            }
            if (diff && diff < 0) {
                _selectedYear = selectedYear - 1;
            }
            setSelectedYear(_selectedYear);
        }
    }, [selectedYear]);
    var renderCalendarDays = function () {
        if (selectedMonth !== undefined && selectedYear !== undefined && fullDate !== undefined) {
            var days = [];
            var monthStartFullDate = new Date(selectedYear, selectedMonth, 1);
            var monthStartDayInWeek = getDay(monthStartFullDate);
            var monthEndFullDate = endOfMonth(monthStartFullDate);
            var monthEndDate = endOfMonth(monthEndFullDate).getDate();
            var previousMonthStartDate = sub(monthStartFullDate, {
                months: 1,
            });
            var previousMonthEndDate = endOfMonth(previousMonthStartDate).getDate();
            var monthEndDayInWeek = getDay(monthEndFullDate);
            for (var i = monthStartDayInWeek; i > 0; i--) {
                days.push(React.createElement(Box, { key: "pre-".concat(i) },
                    React.createElement(AppText, { color: '#595959', textAlign: 'center', fontWeight: 700, fontSize: '13px', lineHeight: '26px' }, previousMonthEndDate - i + 1)));
            }
            for (var i = 1; i <= monthEndDate; i++) {
                var date = new Date(selectedYear, selectedMonth, i);
                var isSelected = format(fullDate, 'yyyy-MM-dd').toString() == format(date, 'yyyy-MM-dd').toString();
                days.push(React.createElement(AppCalenderDate, { key: "date-".concat(i), handleDateClick: onDateSelect, isSelected: isSelected, date: date, day: i, dateRange: dateRange, tempRangeEndDate: tempRangeEndDate, setTempRangeEndDate: setTempRangeEndDate, validMaxDate: validMaxDate }));
            }
            for (var x = monthEndDayInWeek, key = 1; x < 6; x++, key++) {
                days.push(React.createElement(Box, { key: "post-".concat(x) },
                    React.createElement(AppText, { color: '#595959', textAlign: 'center', fontWeight: 700, fontSize: '13px', lineHeight: '26px' }, key)));
            }
            return days;
        }
        return null;
    };
    return (React.createElement(Box, { w: '310px', h: '300px', bgColor: '#262626', pl: '10px', pr: '10px', pt: '15px', pb: '15px' },
        React.createElement(HStack, { justify: 'space-between', pb: '15px', pl: '10px', pr: '10px' },
            React.createElement(AppIcon, { name: 'calenderDoubleArrow', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onYearChangeWithArrow(-1); }, transform: 'rotate(180deg)' }),
            React.createElement(AppIcon, { name: 'chevronLeft', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onMonthChangeWithArrow(-1); } }),
            React.createElement(AppText, { color: '#fff', fontWeight: 500, fontSize: '13px', lineHeight: '26px', whiteSpace: 'nowrap', w: '80%', textAlign: 'center' }, selectedMonth !== undefined &&
                selectedYear !== undefined &&
                "".concat(getMonthName(selectedMonth), " ").concat(selectedYear)),
            React.createElement(AppIcon, { name: 'chevronRight', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onMonthChangeWithArrow(1); } }),
            React.createElement(AppIcon, { name: 'calenderDoubleArrow', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onYearChangeWithArrow(1); } })),
        React.createElement(Grid, { templateColumns: 'repeat(7, 1fr)', gap: 2 },
            DAYS.map(function (day, index) { return (React.createElement(AppText, { textAlign: 'center', color: '#fff', key: "day-".concat(index), fontWeight: 700, fontSize: '13px', lineHeight: '26px' }, day)); }),
            renderCalendarDays())));
};
export default AppDateCalendar;
//# sourceMappingURL=AppDateCalendar.js.map