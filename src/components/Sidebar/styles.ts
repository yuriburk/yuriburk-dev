import styled, { css } from 'styled-components';

import { theme, ThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark }: ThemeProps) => css`
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
      margin-top: 1rem;
      line-height: 1.5;
    }

    span {
      line-height: 1.5;
      ${theme.screenSizes.lg} {
        text-align: left;
      }
    }
  `,
);
