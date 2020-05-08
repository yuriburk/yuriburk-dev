import styled from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../../styles/themes';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${props => (props.color ? props.color : theme.colors.blue)};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.5, theme.colors.blue)};
  }

  svg {
    color: ${theme.colors.primaryWhite};
  }
`;
