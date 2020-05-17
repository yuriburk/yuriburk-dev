import styled, { css } from 'styled-components';

import { IThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark, theme }: IThemeProps) => css`
    display: flex;
    flex-direction: column;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    padding: 1.5rem;
    border-radius: 0.5rem;

    ${theme.screenSizes.md} {
      padding: 1.5rem 5px;
    }
  `,
);
