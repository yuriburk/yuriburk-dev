import colors from './colors';
import screenSizes from './screenSizes';

export const theme = {
  colors,
  screenSizes,
};

type Theme = typeof theme;

export interface IThemeProps {
  dark: boolean;
  theme: Theme;
}
