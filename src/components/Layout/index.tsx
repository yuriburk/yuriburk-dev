import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Socials from '../Socials';
import Categories from '../Categories';
import Footer from '../Footer';
import { useTheme } from '../../hooks/theme';
import GlobalStyle, { Container } from './style';

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
              <Categories />
            </Sidebar>
          </aside>
        </Container>
      </div>
      <Footer />
      <GlobalStyle dark={dark} />
    </div>
  );
};

export default Layout;
