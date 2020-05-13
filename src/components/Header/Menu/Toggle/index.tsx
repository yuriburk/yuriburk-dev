import React, { useState } from 'react';

import MenuDrawer from '../Drawer';
import { Container } from './styles';

const MenuToggle: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

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
