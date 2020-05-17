import styled, { css } from 'styled-components';

import { theme, IThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark }: IThemeProps) => css`
    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};

    h2 {
      font-size: 22px;
      font-weight: 800;
    }

    p {
      text-align: justify;
    }

    span {
      ${theme.screenSizes.lg} {
        text-align: left;
      }
    }
  `,
);
