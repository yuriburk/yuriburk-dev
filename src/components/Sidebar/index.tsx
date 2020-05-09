import React from 'react';

import { Container } from './styles';
import { useTheme } from '../../hooks/theme';

interface ISidebarProps {
  title?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({ title, children }) => {
  const { dark } = useTheme();

  return (
    <Container dark={dark}>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  );
};

export default Sidebar;
