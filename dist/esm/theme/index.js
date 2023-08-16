import { extendTheme } from '@chakra-ui/react';
import semanticTokens from './semanticTokens';
// import { globalStyles as styles } from './globalStyles';
// import components from './components';
import { fonts } from './Fonts';
var config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'awesome-date-picker'
};
// const breakpoints = {
//   md: '1000px',
//   lg: '1400px'
// };
var theme = extendTheme({
    // breakpoints,
    config: config,
    fonts: fonts,
    // styles,
    semanticTokens: semanticTokens,
    // components
});
export default theme;
//# sourceMappingURL=index.js.map