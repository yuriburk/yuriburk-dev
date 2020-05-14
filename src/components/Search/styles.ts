import styled, { css } from 'styled-components';

import { theme } from '../../styles/themes';

interface IContainerProps {
  dark: boolean;
  searching: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  display: none;
  color: ${theme.colors.blue};

  ${({ searching, dark }) =>
    searching &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 1165px;
      padding: 2.5px;
      margin: 0 auto;
      right: 0;
      left: 0;
      padding: 10px;
      margin-top: 10px;
      border-radius: 0.5rem;
      background-color: ${dark
        ? theme.colors.secundaryDark
        : theme.colors.secundaryWhite};

      input {
        padding: 0 15px;
        outline: 0;
        border: 0;
        width: 100%;
        background-color: ${dark
          ? theme.colors.secundaryDark
          : theme.colors.secundaryWhite};
        color: ${theme.colors.blue};
        font-size: 15px;
      }

      svg {
        margin-right: 15px;
      }
    `}
`;
