import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Tags from '../Tags';
import Footer from '../Footer';
import { useTheme } from '../../hooks/theme';
import GlobalStyle, { Content } from './style';

interface ILayoutProps {
  showSidebar?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({ showSidebar = true, children }) => {
  const { dark } = useTheme();

  return (
    <div>
      <Header />
      <Content>
        <main role="main">{children}</main>
        {showSidebar && (
          <aside>
            <Sidebar title="Tags">
              <Tags />
            </Sidebar>
          </aside>
        )}
      </Content>
      <Footer />
      <GlobalStyle dark={dark} />
    </div>
  );
};

export default Layout;
