import React from 'react';

import { Container } from './styles';

interface SidebarProps {
  title: string;
  description: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, description }) => (
  <Container>
    <h3>{title}</h3>
    <p>{description}</p>
  </Container>
);

export default Sidebar;
