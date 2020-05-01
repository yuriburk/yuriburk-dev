import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../../../static/favicon.png';
import config from '../../../data/config';
import Header from '../Header';
import Container from '../Container';
import GlobalStyle from './style';
import Sidebar from '../Sidebar';

const Layout: React.FC = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
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
    <GlobalStyle />
  </div>
);

export default Layout;
