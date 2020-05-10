import styled, { css } from 'styled-components';

import { IThemeProps } from '../../styles/themes';

export const Container = styled.footer(
  ({ dark, theme }: IThemeProps) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    padding: 5px;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    font-size: 15px;
    margin-top: 15px;

    span {
      display: flex;
      margin: 0 2.5px;
    }
  `,
);
