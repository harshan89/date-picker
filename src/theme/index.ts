import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import semanticTokens from './semanticTokens'
import { fonts } from './Fonts'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'awesome-date-picker',
}

const theme = extendTheme({
  config,
  fonts,
  semanticTokens,
})

export default theme
