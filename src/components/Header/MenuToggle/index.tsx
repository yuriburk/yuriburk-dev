import React, { useState } from 'react';

import MenuDrawer from '../MenuDrawer';
import { Container } from './styles';

const MenuToggle: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <MenuDrawer isMenuOpened={isOpened} />
      <Container
        role="button"
        onClick={() => setIsOpened(!isOpened)}
        isOpened={isOpened}
      >
        <span />
      </Container>
    </>
  );
};

export default MenuToggle;
