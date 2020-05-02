import colors from './colors';

export const theme = {
  colors,
};

type Theme = typeof theme;

export interface ThemeProps {
  dark: boolean;
  theme: Theme;
}
