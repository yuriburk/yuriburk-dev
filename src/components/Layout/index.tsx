import React from 'react';

import Header from '../Header';
import GlobalStyle, { Container } from './style';
import Sidebar from '../Sidebar';
import Socials from '../Socials';
import Category from '../Category';
import { useTheme } from '../../hooks/theme';

const Layout: React.FC = ({ children }) => {
  const { dark } = useTheme();

  return (
    <div>
      <Header />
      <div className="content">
        <Container>
          <main role="main">{children}</main>
          <aside>
            <Sidebar title="Minhas Redes">
              <Socials />
            </Sidebar>
            <Sidebar title="Categorias">
              <Category title="React.js" />
              <Category title="React Native" />
              <Category title="Gatsby" />
              <Category title="C#" />
            </Sidebar>
          </aside>
        </Container>
      </div>
      <GlobalStyle dark={dark} />
    </div>
  );
};
export default Layout;
