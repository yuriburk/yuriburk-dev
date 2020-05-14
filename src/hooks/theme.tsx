import React, {
  useState,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { theme } from '../styles/themes';

interface IThemeContextData {
  dark: boolean;
  toggleTheme(): void;
  isLayoutActive: boolean;
  activateLayout(active: boolean): void;
}

export const ThemeContext = createContext<IThemeContextData>(
  {} as IThemeContextData,
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);

  useEffect(() => {
    const darkTheme = localStorage.getItem('@YuriBurk.dev:darkTheme');

    if (darkTheme) {
      setDark(JSON.parse(darkTheme));
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setDark(!dark);
    localStorage.setItem('@YuriBurk.dev:darkTheme', JSON.stringify(!dark));
  }, [dark]);

  const activateLayout = useCallback(active => setIsLayoutActive(active), []);

  return (
    <ThemeContext.Provider
      value={{ dark, toggleTheme, isLayoutActive, activateLayout }}
    >
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}
