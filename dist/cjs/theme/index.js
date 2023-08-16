"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("@chakra-ui/react");
var semanticTokens_1 = tslib_1.__importDefault(require("./semanticTokens"));
// import { globalStyles as styles } from './globalStyles';
// import components from './components';
var Fonts_1 = require("./Fonts");
var config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'awesome-date-picker'
};
// const breakpoints = {
//   md: '1000px',
//   lg: '1400px'
// };
var theme = (0, react_1.extendTheme)({
    // breakpoints,
    config: config,
    fonts: Fonts_1.fonts,
    // styles,
    semanticTokens: semanticTokens_1.default,
    // components
});
exports.default = theme;
//# sourceMappingURL=index.js.map