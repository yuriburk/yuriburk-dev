import React from 'react';

import Header from '../Header';
import GlobalStyle from './style';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">{children}</main>

    <GlobalStyle />
  </div>
);

export default Layout;
