import styled, { css } from 'styled-components';

import { IThemeProps } from '../../styles/themes';

export const SearchContainer = styled.div(
  ({ dark, theme }: IThemeProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.blue};
    width: 100%;
    max-width: 1165px;
    padding: 2.5px;
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
  `,
);
