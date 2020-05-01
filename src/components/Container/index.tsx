import React from 'react';

import { ContainerStyle } from './styles';

const Container: React.FC = ({ children }) => (
  <ContainerStyle>{children}</ContainerStyle>
);

export default Container;
