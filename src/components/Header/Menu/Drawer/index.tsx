import React from 'react';
import { Link } from 'gatsby';

import { Container } from './styles';
import { useTheme } from '../../../../hooks/theme';

interface IMenuDrawerProps {
  isMenuOpened: boolean;
}

const MenuDrawer: React.FC<IMenuDrawerProps> = ({ isMenuOpened }) => {
  const { dark } = useTheme();

  return (
    <Container dark={dark} open={isMenuOpened}>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Link to="/about">sobre mim</Link>
        </li>
      </ul>
    </Container>
  );
};

export default MenuDrawer;
