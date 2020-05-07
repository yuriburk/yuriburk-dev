import React from 'react';

import Header from '../Header';
import GlobalStyle, { Container } from './style';
import Sidebar from '../Sidebar';
import Socials from '../Socials';
import { useTheme } from '../../hooks/theme';
import EmojiInfo from '../EmojiInfo';

const Layout: React.FC = ({ children }) => {
  const { dark } = useTheme();

  return (
    <div>
      <Header />
      <div className="content">
        <Container>
          <main role="main">{children}</main>
          <aside>
            <Sidebar title="Sobre mim">
              <Socials />
              <EmojiInfo
                emoji={{ text: '👨‍', ariaLabel: 'about-me' }}
                text="Yuri Burk"
              />
              <EmojiInfo
                emoji={{ text: '👨‍💻', ariaLabel: 'about-me' }}
                text="Desenvolvedor"
              />
              <EmojiInfo
                emoji={{ text: '💼', ariaLabel: 'about-work' }}
                text="HBSIS"
              />
              <EmojiInfo
                emoji={{ text: '🌆', ariaLabel: 'about-city' }}
                text="Blumenau-SC"
              />
              <EmojiInfo
                emoji={{ text: '👨‍🎓', ariaLabel: 'about-college' }}
                text="Sistemas de Informação"
              />
            </Sidebar>
            <Sidebar title="Sobre o blog">
              <p>
                Aqui você encontará muito conteúdo de FrontEnd e CSS, além de
                umas dicas sensacionais de carreira!
              </p>
            </Sidebar>
          </aside>
        </Container>
      </div>
      <GlobalStyle dark={dark} />
    </div>
  );
};
export default Layout;
