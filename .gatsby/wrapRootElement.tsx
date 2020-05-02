import React from 'react';

import { ThemeProvider } from '../src/hooks/theme';

export const wrapRootElement: React.FC = ({ element }: any) => (
  <ThemeProvider>{element}</ThemeProvider>
);
