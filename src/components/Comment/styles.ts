import styled, { css } from 'styled-components';

import { IThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark, theme }: IThemeProps) => css`
    padding: 15px;
    margin-top: 15px;
    border-radius: 0.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
  `,
);
