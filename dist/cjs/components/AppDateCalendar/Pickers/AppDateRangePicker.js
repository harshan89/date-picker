"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_3 = require("react");
var AppDateCalendar_1 = tslib_1.__importDefault(require("../Calender/AppDateCalendar"));
var date_fns_1 = require("date-fns");
var framer_motion_1 = require("framer-motion");
var layout_1 = require("../../../utils/layout");
var theme_1 = tslib_1.__importDefault(require("../../../theme"));
var Fonts_1 = tslib_1.__importDefault(require("../../../theme/Fonts"));
var AppDateRangePicker = function (_a) {
    var icon = _a.icon, id = _a.id, onRangeSelect = _a.onRangeSelect, validMaxDate = _a.validMaxDate, _b = _a.initialDate1, initialDate1 = _b === void 0 ? (0, date_fns_1.addMonths)(new Date(), -1) : _b, _c = _a.initialDate2, initialDate2 = _c === void 0 ? new Date() : _c, prePos = _a.prePos;
    var _d = (0, react_3.useState)(false), isVisible = _d[0], setIsVisible = _d[1];
    var _e = (0, react_3.useState)(undefined), startDate = _e[0], setStartDate = _e[1];
    var _f = (0, react_3.useState)(undefined), endDate = _f[0], setEndDate = _f[1];
    var _g = (0, react_3.useState)(), tempRangeEndDate = _g[0], setTempRangeEndDate = _g[1];
    var _h = (0, react_3.useState)({ x: 0, y: 0 }), pos = _h[0], setPos = _h[1];
    var ref = (0, react_3.useRef)();
    (0, react_2.useOutsideClick)({
        //@ts-ignore
        ref: ref,
        handler: function () { return setIsVisible(false); },
    });
    var onRangeSelectionComplete = function () {
        onRangeSelect(startDate, endDate, id);
    };
    (0, react_3.useEffect)(function () {
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
        var pos = (0, layout_1.getBoxPosition)(e, 600, 312, prePos);
        setPos(pos);
        setIsVisible(!isVisible);
    };
    return (react_1.default.createElement(react_2.ChakraProvider, { theme: theme_1.default },
        react_1.default.createElement(Fonts_1.default, null),
        react_1.default.createElement(react_2.Box, { cursor: 'pointer', ref: ref, zIndex: 1 },
            react_1.default.createElement(react_2.Box, { onClick: onCalenderIconClick }, icon),
            isVisible && (react_1.default.createElement(react_2.Box, { pos: 'absolute', bgColor: 'overlay-bg', w: '600px', h: '312px', padding: '6px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', borderRadius: '4px', top: pos.y, left: pos.x, as: framer_motion_1.motion.div, initial: { opacity: 0, scale: 0, y: '-300px' }, animate: { opacity: 1, scale: 1, y: 0 }, transition: '.2s' },
                react_1.default.createElement(react_2.HStack, { gap: 0, spacing: 0 },
                    react_1.default.createElement(AppDateCalendar_1.default, { onDateSelect: function (date) { return onSelectDate(date); }, dateRange: { startDate: startDate, endDate: endDate }, tempRangeEndDate: tempRangeEndDate, setTempRangeEndDate: setTempRangeEndDate, initDate: initialDate1, validMaxDate: validMaxDate }),
                    react_1.default.createElement(AppDateCalendar_1.default, { onDateSelect: function (date) { return onSelectDate(date); }, dateRange: { startDate: startDate, endDate: endDate }, tempRangeEndDate: tempRangeEndDate, setTempRangeEndDate: setTempRangeEndDate, initDate: initialDate2, validMaxDate: validMaxDate })))))));
};
exports.default = AppDateRangePicker;
//# sourceMappingURL=AppDateRangePicker.js.map