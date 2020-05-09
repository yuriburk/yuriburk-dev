import styled, { css } from 'styled-components';

import { IThemeProps } from '../../styles/themes';

export const Container = styled.footer(
  ({ dark, theme }: IThemeProps) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-top: 50px;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};

    span {
      display: flex;
      margin: 0 2.5px;
    }
  `,
);
