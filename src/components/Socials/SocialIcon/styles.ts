import styled from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../../styles/themes';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${theme.colors.blue};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.2, theme.colors.blue)};
  }

  svg {
    color: ${theme.colors.primaryWhite};
  }
`;
