"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_3 = require("react");
var AppDateCalendar_1 = tslib_1.__importDefault(require("../Calender/AppDateCalendar"));
var framer_motion_1 = require("framer-motion");
var layout_1 = require("../../../utils/layout");
var theme_1 = tslib_1.__importDefault(require("../../../theme"));
var Fonts_1 = tslib_1.__importDefault(require("../../../theme/Fonts"));
var AppDatePicker = function (_a) {
    var icon = _a.icon, onDateSelect = _a.onDateSelect, prePos = _a.prePos;
    var _b = (0, react_3.useState)({ x: 0, y: 0 }), pos = _b[0], setPos = _b[1];
    var _c = (0, react_3.useState)(false), isVisible = _c[0], setIsVisible = _c[1];
    var ref = (0, react_3.useRef)();
    (0, react_2.useOutsideClick)({
        //@ts-ignore
        ref: ref,
        handler: function () { return setIsVisible(false); },
    });
    var onCalenderIconClick = function (e) {
        var pos = (0, layout_1.getBoxPosition)(e, 322, 312, prePos);
        setPos(pos);
        setIsVisible(!isVisible);
    };
    var onSelectDate = function (date) {
        onDateSelect(date);
        setIsVisible(false);
    };
    return (react_1.default.createElement(react_2.ChakraProvider, { theme: theme_1.default },
        react_1.default.createElement(Fonts_1.default, null),
        react_1.default.createElement(react_2.Box, { as: framer_motion_1.motion.div, initial: { opacity: 0, scale: 0.5, x: -100 }, animate: { opacity: 1, scale: 1, x: 0 }, transition: '.1s' },
            react_1.default.createElement(react_2.Box, { onClick: function (e) { return onCalenderIconClick(e); }, cursor: 'pointer' }, icon),
            isVisible && (react_1.default.createElement(react_2.Box
            // @ts-ignore
            , { 
                // @ts-ignore
                ref: ref, position: 'absolute', w: '322px', h: '312px', top: pos.y, left: pos.x, bgColor: 'overlay-bg', padding: '6px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', borderRadius: '4px', as: framer_motion_1.motion.div, initial: { opacity: 0, scale: 0, y: '-300px' }, animate: { opacity: 1, scale: 1, y: 0 }, transition: '.2s', zIndex: 1 },
                react_1.default.createElement(AppDateCalendar_1.default, { onDateSelect: function (date) { return onSelectDate(date); } }))))));
};
exports.default = AppDatePicker;
//# sourceMappingURL=AppDatePicker.js.map