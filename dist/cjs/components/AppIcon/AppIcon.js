"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalenderDoubleArrow = exports.ChevronRightIcon = exports.ChevronLeftIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("@chakra-ui/icons");
exports.ChevronLeftIcon = (0, icons_1.createIcon)({
    displayName: 'chevron left',
    viewBox: '0 0 7 10',
    path: [react_1.default.createElement("path", { key: 1, d: 'M6.84163 1.175L5.66663 0L0.666626 5L5.66663 10L6.84163 8.825L3.02496 5L6.84163 1.175Z' })],
});
exports.ChevronRightIcon = (0, icons_1.createIcon)({
    displayName: 'chevron right',
    viewBox: '0 0 7 10',
    path: [react_1.default.createElement("path", { key: 2, d: 'M0.158374 8.825L1.33337 10L6.33337 5L1.33337 0L0.158374 1.175L3.97504 5L0.158374 8.825Z' })],
});
exports.CalenderDoubleArrow = (0, icons_1.createIcon)({
    displayName: 'calender double arrow',
    viewBox: '0 0 14 12',
    path: [
        react_1.default.createElement("path", { key: 3, d: 'M7.2896 12L13.0827 6L7.2896 0L5.92822 1.41L10.3503 6L5.92822 10.59L7.2896 12Z', fill: '#8C8C8C' }),
        react_1.default.createElement("path", { key: 4, d: 'M2.2896 12L8.08271 6L2.2896 0L0.928223 1.41L5.35029 6L0.928223 10.59L2.2896 12Z', fill: '#8C8C8C' }),
    ],
});
var AppIcon = function (_a) {
    var name = _a.name, rest = tslib_1.__rest(_a, ["name"]);
    switch (name) {
        case 'chevronLeft':
            return react_1.default.createElement(exports.ChevronLeftIcon, tslib_1.__assign({}, rest));
        case 'chevronRight':
            return react_1.default.createElement(exports.ChevronRightIcon, tslib_1.__assign({}, rest));
        case 'calenderDoubleArrow':
            return react_1.default.createElement(exports.CalenderDoubleArrow, tslib_1.__assign({}, rest));
    }
};
exports.default = AppIcon;
//# sourceMappingURL=AppIcon.js.map