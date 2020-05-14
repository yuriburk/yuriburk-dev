import React, { useState, useEffect } from 'react';

import MenuDrawer from '../Drawer';
import { Container } from './styles';
import { useTheme } from '../../../../hooks/theme';

const MenuToggle: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { activateLayout } = useTheme();

  useEffect(() => activateLayout(isOpened), [isOpened, activateLayout]);

  return (
    <>
      <Container
        role="button"
        onClick={() => setIsOpened(!isOpened)}
        isOpened={isOpened}
      >
        <span />
      </Container>
      <MenuDrawer isMenuOpened={isOpened} />
    </>
  );
};

export default MenuToggle;
