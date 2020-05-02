import React from 'react';
import 'minireset.css';

import { ThemeProvider } from './src/hooks/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
