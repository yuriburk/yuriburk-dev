import React from 'react';
import { Link } from 'gatsby';

import { Container } from './styles';

interface IMenuDrawerProps {
  isMenuOpened: boolean;
}

const MenuDrawer: React.FC<IMenuDrawerProps> = ({ isMenuOpened }) => (
  <Container open={isMenuOpened}>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
    </ul>
  </Container>
);

export default MenuDrawer;
