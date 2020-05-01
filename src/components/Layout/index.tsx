import React from 'react';

import Header from '../Header';
import Container from '../Container';
import GlobalStyle from './style';
import Sidebar from '../Sidebar';

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <Container>
      <main role="main">{children}</main>
      <aside>
        <Sidebar
          title="Sobre mim"
          description="Sou um desenvolvedor apaixonado por Frontend"
        />
        <Sidebar
          title="Sobre o blog"
          description="Aqui você encontará muito conteúdo de FrontEnd e CSS, além de umas dicas sensacionais de carreira!"
        />
      </aside>
    </Container>
    <GlobalStyle />
  </div>
);

export default Layout;
