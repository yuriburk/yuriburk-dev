import React from 'react';

import Header from '../Header';
import Container from '../Container';
import GlobalStyle from './style';
import Sidebar from '../Sidebar';
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
            <Sidebar
              title="Sobre mim"
              description="Sou um desenvolvedor apaixonado por frontend"
            />
            <Sidebar
              title="Sobre o blog"
              description="Aqui você encontará muito conteúdo de FrontEnd e CSS, além de umas dicas sensacionais de carreira!"
            />
          </aside>
        </Container>
      </div>
      <GlobalStyle dark={dark} />
    </div>
  );
};
export default Layout;
