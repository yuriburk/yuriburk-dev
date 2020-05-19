import styled, { css } from 'styled-components';

import { theme, IThemeProps } from '../../styles/themes';

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

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;

    ${theme.screenSizes.xsm} {
      width: 50px;
      height: 50px;
    }
  }

  h2 {
    font-weight: 800;
  }
`;
