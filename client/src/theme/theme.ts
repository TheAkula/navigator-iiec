import { colors } from './colors'
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { Fonts } from './fonts'
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoMediuam from '../assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

export type ThemeType = {
  theme: typeof theme
}

export const theme: DefaultTheme = {
    ...colors,
    ...Fonts,
}

export const GlobalStyle = createGlobalStyle<ThemeType>`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular});
    font-weight: 400;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediuam});
    font-weight: 500;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold});
    font-weight: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
`;
