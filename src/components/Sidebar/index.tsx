import React from 'react';

import { Container } from './styles';
import { useTheme } from '../../hooks/theme';

interface SidebarProps {
  title: string;
  description: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, description }) => {
  const { dark } = useTheme();

  return (
    <Container dark={dark}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default Sidebar;
