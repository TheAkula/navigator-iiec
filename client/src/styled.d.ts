import { theme } from './theme'

type CustomTheme = typeof theme

declare module 'styled-components' {
  export type DefaultTheme = CustomTheme
}
