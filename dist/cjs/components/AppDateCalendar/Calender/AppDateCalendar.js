"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var constants_1 = require("../../../utils/constants");
var AppIcon_1 = tslib_1.__importDefault(require("../../AppIcon/AppIcon"));
var date_fns_1 = require("date-fns");
var AppCalenderDate_1 = tslib_1.__importDefault(require("./AppCalenderDate"));
var AppText_1 = tslib_1.__importDefault(require("../../AppText/AppText"));
var AppDateCalendar = function (_a) {
    var onDateSelect = _a.onDateSelect, initDate = _a.initDate, dateRange = _a.dateRange, validMaxDate = _a.validMaxDate, tempRangeEndDate = _a.tempRangeEndDate, setTempRangeEndDate = _a.setTempRangeEndDate;
    var _b = (0, react_1.useState)(), fullDate = _b[0], setFullDate = _b[1];
    var _c = (0, react_1.useState)(), selectedMonth = _c[0], setSelectedMonth = _c[1];
    var _d = (0, react_1.useState)(), selectedYear = _d[0], setSelectedYear = _d[1];
    (0, react_1.useEffect)(function () {
        var initialDate = initDate ? initDate : new Date();
        var _selectedMonth = (0, date_fns_1.getMonth)(initialDate);
        var _selectedYear = (0, date_fns_1.getYear)(initialDate);
        setSelectedMonth(_selectedMonth);
        setSelectedYear(_selectedYear);
        setFullDate(initialDate);
    }, []);
    var getMonthName = (0, react_1.useCallback)(function (month) {
        return constants_1.MONTH_NAMES[month];
    }, [selectedMonth]);
    var onMonthChangeWithArrow = (0, react_1.useCallback)(function (diff) {
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
    var onYearChangeWithArrow = (0, react_1.useCallback)(function (diff) {
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
            var monthStartDayInWeek = (0, date_fns_1.getDay)(monthStartFullDate);
            var monthEndFullDate = (0, date_fns_1.endOfMonth)(monthStartFullDate);
            var monthEndDate = (0, date_fns_1.endOfMonth)(monthEndFullDate).getDate();
            var previousMonthStartDate = (0, date_fns_1.sub)(monthStartFullDate, {
                months: 1,
            });
            var previousMonthEndDate = (0, date_fns_1.endOfMonth)(previousMonthStartDate).getDate();
            var monthEndDayInWeek = (0, date_fns_1.getDay)(monthEndFullDate);
            for (var i = monthStartDayInWeek; i > 0; i--) {
                days.push(react_1.default.createElement(react_2.Box, { key: "pre-".concat(i) },
                    react_1.default.createElement(AppText_1.default, { color: '#595959', textAlign: 'center', fontWeight: 700, fontSize: '13px', lineHeight: '26px' }, previousMonthEndDate - i + 1)));
            }
            for (var i = 1; i <= monthEndDate; i++) {
                var date = new Date(selectedYear, selectedMonth, i);
                var isSelected = (0, date_fns_1.format)(fullDate, 'yyyy-MM-dd').toString() == (0, date_fns_1.format)(date, 'yyyy-MM-dd').toString();
                days.push(react_1.default.createElement(AppCalenderDate_1.default, { key: "date-".concat(i), handleDateClick: onDateSelect, isSelected: isSelected, date: date, day: i, dateRange: dateRange, tempRangeEndDate: tempRangeEndDate, setTempRangeEndDate: setTempRangeEndDate, validMaxDate: validMaxDate }));
            }
            for (var x = monthEndDayInWeek, key = 1; x < 6; x++, key++) {
                days.push(react_1.default.createElement(react_2.Box, { key: "post-".concat(x) },
                    react_1.default.createElement(AppText_1.default, { color: '#595959', textAlign: 'center', fontWeight: 700, fontSize: '13px', lineHeight: '26px' }, key)));
            }
            return days;
        }
        return null;
    };
    return (react_1.default.createElement(react_2.Box, { w: '310px', h: '300px', bgColor: '#262626', pl: '10px', pr: '10px', pt: '15px', pb: '15px' },
        react_1.default.createElement(react_2.HStack, { justify: 'space-between', pb: '15px', pl: '10px', pr: '10px' },
            react_1.default.createElement(AppIcon_1.default, { name: 'calenderDoubleArrow', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onYearChangeWithArrow(-1); }, transform: 'rotate(180deg)' }),
            react_1.default.createElement(AppIcon_1.default, { name: 'chevronLeft', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onMonthChangeWithArrow(-1); } }),
            react_1.default.createElement(AppText_1.default, { color: '#fff', fontWeight: 500, fontSize: '13px', lineHeight: '26px', whiteSpace: 'nowrap', w: '80%', textAlign: 'center' }, selectedMonth !== undefined &&
                selectedYear !== undefined &&
                "".concat(getMonthName(selectedMonth), " ").concat(selectedYear)),
            react_1.default.createElement(AppIcon_1.default, { name: 'chevronRight', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onMonthChangeWithArrow(1); } }),
            react_1.default.createElement(AppIcon_1.default, { name: 'calenderDoubleArrow', fill: 'left-menu-icon-color', _hover: { fill: 'left-menu-icon-hover-color' }, width: '12px', height: '12px', cursor: 'pointer', onClick: function () { return onYearChangeWithArrow(1); } })),
        react_1.default.createElement(react_2.Grid, { templateColumns: 'repeat(7, 1fr)', gap: 2 },
            constants_1.DAYS.map(function (day, index) { return (react_1.default.createElement(AppText_1.default, { textAlign: 'center', color: '#fff', key: "day-".concat(index), fontWeight: 700, fontSize: '13px', lineHeight: '26px' }, day)); }),
            renderCalendarDays())));
};
exports.default = AppDateCalendar;
//# sourceMappingURL=AppDateCalendar.js.map