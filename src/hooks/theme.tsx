import React, {
  useState,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { theme } from '../styles/themes';

interface ThemeContextData {
  dark: boolean;
  toggleTheme(): void;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(true);

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

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}
