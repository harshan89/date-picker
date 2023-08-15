import React from 'react';
import { Box, useOutsideClick } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import AppDateCalendar from '../Calender/AppDateCalendar';
import { motion } from 'framer-motion';
import { getBoxPosition } from '../../../utils/layout';
var AppDatePicker = function (_a) {
    var children = _a.children, onDateSelect = _a.onDateSelect, prePos = _a.prePos;
    var _b = useState({ x: 0, y: 0 }), pos = _b[0], setPos = _b[1];
    var _c = useState(false), isVisible = _c[0], setIsVisible = _c[1];
    var ref = useRef();
    useOutsideClick({
        //@ts-ignore
        ref: ref,
        handler: function () { return setIsVisible(false); }
    });
    var onCalenderIconClick = function (e) {
        var pos = getBoxPosition(e, 322, 312, prePos);
        setPos(pos);
        setIsVisible(!isVisible);
    };
    var onSelectDate = function (date) {
        onDateSelect(date);
        setIsVisible(false);
    };
    return (React.createElement(Box, { as: motion.div, initial: { opacity: 0, scale: 0.5, x: -100 }, animate: { opacity: 1, scale: 1, x: 0 }, transition: ".1s" },
        React.createElement(Box, { onClick: function (e) { return onCalenderIconClick(e); }, cursor: "pointer" }, children),
        isVisible && (React.createElement(Box
        // @ts-ignore
        , { 
            // @ts-ignore
            ref: ref, position: "absolute", w: "322px", h: "312px", top: pos.y, left: pos.x, bgColor: "overlay-bg", padding: "6px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", borderRadius: "4px", as: motion.div, initial: { opacity: 0, scale: 0, y: '-300px' }, animate: { opacity: 1, scale: 1, y: 0 }, transition: ".2s", zIndex: 1 },
            React.createElement(AppDateCalendar, { onDateSelect: function (date) { return onSelectDate(date); } })))));
};
export default AppDatePicker;
//# sourceMappingURL=AppDatePicker.js.map