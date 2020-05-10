import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../../styles/themes';

interface IContainerProps {
  color?: string;
}

export const Container = styled.div<IContainerProps>(
  ({ color }) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 50%;
    background-color: ${color ?? theme.colors.blue};
    margin: 0 5px;
    transition: transform 0.2s cubic-bezier(0, 1.8, 1, 1.8);

    &:hover {
      transform: scale(1.1);
    }

    svg {
      color: ${theme.colors.primaryWhite};
    }
  `,
);
