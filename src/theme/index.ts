import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import semanticTokens from './semanticTokens'
// import { globalStyles as styles } from './globalStyles';
// import components from './components';
import { fonts } from './Fonts'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'awesome-date-picker',
}

// const breakpoints = {
//   md: '1000px',
//   lg: '1400px'
// };

const theme = extendTheme({
  // breakpoints,
  config,
  fonts,
  // styles,
  semanticTokens,
  // components
})

export default theme
