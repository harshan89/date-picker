"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var AppText_1 = tslib_1.__importDefault(require("../../AppText/AppText"));
var react_3 = require("react");
var AppCalenderDate = function (_a) {
    var date = _a.date, isSelected = _a.isSelected, handleDateClick = _a.handleDateClick, day = _a.day, validMaxDate = _a.validMaxDate, dateRange = _a.dateRange, setTempRangeEndDate = _a.setTempRangeEndDate, tempRangeEndDate = _a.tempRangeEndDate;
    var _b = (0, react_3.useState)('transparent'), bgColor = _b[0], setBgColor = _b[1];
    var _c = (0, react_3.useState)('1px solid transparent'), border = _c[0], setBorder = _c[1];
    (0, react_3.useEffect)(function () {
        var isInRange = function () {
            try {
                if ((dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) && tempRangeEndDate) {
                    return ((date >= (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) && date <= tempRangeEndDate) ||
                        (date <= (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) && date >= tempRangeEndDate));
                }
                return false;
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
    return (react_1.default.createElement(react_2.Box, { key: "as-".concat(day), cursor: isValidDateRange(date) ? 'pointer' : 'default', onClick: function () {
            isValidDateRange(date) && onDateClickHandler();
        }, transition: 'all 2s ease', onMouseEnter: function () { return isValidDateRange(date) && onMouseEnterDate(date); }, onMouseLeave: function () { return isValidDateRange(date) && setBorder('1px solid transparent'); }, bg: bgColor, border: border },
        react_1.default.createElement(AppText_1.default, { textAlign: 'center', fontWeight: 700, fontSize: '13px', lineHeight: '26px', color: isValidDateRange(date) ? '#fff' : '#595959' }, day)));
};
exports.default = AppCalenderDate;
//# sourceMappingURL=AppCalenderDate.js.map