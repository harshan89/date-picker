import React from 'react';
import { Box, ChakraProvider, HStack, useOutsideClick } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import AppDateCalendar from '../Calender/AppDateCalendar';
import { addMonths } from 'date-fns';
import { motion } from 'framer-motion';
import { getBoxPosition } from '../../../utils/layout';
import theme from '../../../theme';
import Fonts from '../../../theme/Fonts';
var AppDateRangePicker = function (_a) {
    var icon = _a.icon, id = _a.id, onRangeSelect = _a.onRangeSelect, validMaxDate = _a.validMaxDate, _b = _a.initialDate1, initialDate1 = _b === void 0 ? addMonths(new Date(), -1) : _b, _c = _a.initialDate2, initialDate2 = _c === void 0 ? new Date() : _c, prePos = _a.prePos;
    var _d = useState(false), isVisible = _d[0], setIsVisible = _d[1];
    var _e = useState(undefined), startDate = _e[0], setStartDate = _e[1];
    var _f = useState(undefined), endDate = _f[0], setEndDate = _f[1];
    var _g = useState(), tempRangeEndDate = _g[0], setTempRangeEndDate = _g[1];
    var _h = useState({ x: 0, y: 0 }), pos = _h[0], setPos = _h[1];
    var ref = useRef();
    useOutsideClick({
        //@ts-ignore
        ref: ref,
        handler: function () { return setIsVisible(false); },
    });
    var onRangeSelectionComplete = function () {
        onRangeSelect(startDate, endDate, id);
    };
    useEffect(function () {
        if (startDate && endDate) {
            onRangeSelectionComplete();
            setStartDate(undefined);
            setEndDate(undefined);
            setIsVisible(false);
        }
    }, [startDate, endDate]);
    var onSelectDate = function (date) {
        if (!startDate) {
            setStartDate(date);
            return;
        }
        if (!endDate) {
            setEndDate(date);
        }
    };
    var onCalenderIconClick = function (e) {
        var pos = getBoxPosition(e, 600, 312, prePos);
        setPos(pos);
        setIsVisible(!isVisible);
    };
    return (React.createElement(ChakraProvider, { theme: theme },
        React.createElement(Fonts, null),
        React.createElement(Box, { cursor: 'pointer', ref: ref, zIndex: 1 },
            React.createElement(Box, { onClick: onCalenderIconClick }, icon),
            isVisible && (React.createElement(Box, { pos: 'absolute', bgColor: 'overlay-bg', w: '600px', h: '312px', padding: '6px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', borderRadius: '4px', top: pos.y, left: pos.x, as: motion.div, initial: { opacity: 0, scale: 0, y: '-300px' }, animate: { opacity: 1, scale: 1, y: 0 }, transition: '.2s' },
                React.createElement(HStack, { gap: 0, spacing: 0 },
                    React.createElement(AppDateCalendar, { onDateSelect: function (date) { return onSelectDate(date); }, dateRange: { startDate: startDate, endDate: endDate }, tempRangeEndDate: tempRangeEndDate, setTempRangeEndDate: setTempRangeEndDate, initDate: initialDate1, validMaxDate: validMaxDate }),
                    React.createElement(AppDateCalendar, { onDateSelect: function (date) { return onSelectDate(date); }, dateRange: { startDate: startDate, endDate: endDate }, tempRangeEndDate: tempRangeEndDate, setTempRangeEndDate: setTempRangeEndDate, initDate: initialDate2, validMaxDate: validMaxDate })))))));
};
export default AppDateRangePicker;
//# sourceMappingURL=AppDateRangePicker.js.map