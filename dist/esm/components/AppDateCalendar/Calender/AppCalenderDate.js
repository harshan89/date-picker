import React from 'react';
import { Box } from '@chakra-ui/react';
import AppText from '../../AppText/AppText';
import { useEffect, useState } from 'react';
var AppCalenderDate = function (_a) {
    var date = _a.date, isSelected = _a.isSelected, handleDateClick = _a.handleDateClick, day = _a.day, validMaxDate = _a.validMaxDate, dateRange = _a.dateRange, setTempRangeEndDate = _a.setTempRangeEndDate, tempRangeEndDate = _a.tempRangeEndDate;
    var _b = useState('transparent'), bgColor = _b[0], setBgColor = _b[1];
    var _c = useState('1px solid transparent'), border = _c[0], setBorder = _c[1];
    useEffect(function () {
        var isInRange = function () {
            try {
                if ((dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) && tempRangeEndDate) {
                    return ((date >= (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) && date <= tempRangeEndDate) ||
                        (date <= (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) && date >= tempRangeEndDate));
                }
            }
            catch (e) {
                console.log(e);
                return false;
            }
        };
        setBgColor(isInRange() ? '#F7CC45' : 'transparent');
    }, [tempRangeEndDate, isSelected]);
    var onMouseEnterDate = function (date) {
        setBorder('1px solid #fff');
        if (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) {
            setTempRangeEndDate && setTempRangeEndDate(date);
        }
    };
    var isValidDateRange = function (date) {
        if (!validMaxDate) {
            return true;
        }
        return date < validMaxDate;
    };
    var onDateClickHandler = function () {
        handleDateClick(date);
        setBgColor('#F7CC45');
    };
    return (React.createElement(Box, { key: "as-".concat(day), cursor: isValidDateRange(date) ? 'pointer' : 'default', onClick: function () {
            isValidDateRange(date) && onDateClickHandler();
        }, transition: 'all 2s ease', onMouseEnter: function () { return isValidDateRange(date) && onMouseEnterDate(date); }, onMouseLeave: function () { return isValidDateRange(date) && setBorder('1px solid transparent'); }, bg: bgColor, border: border },
        React.createElement(AppText, { textAlign: 'center', fontWeight: 700, fontSize: '13px', lineHeight: '26px', color: isValidDateRange(date) ? '#fff' : '#595959' }, day)));
};
export default AppCalenderDate;
//# sourceMappingURL=AppCalenderDate.js.map