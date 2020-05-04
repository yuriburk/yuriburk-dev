import styled, { css } from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    padding: 1.8rem;
    border-radius: 0.5rem;
    margin: 10px;

    h1,
    h2 {
      font-weight: 800;
      margin-bottom: 15px;
      word-break: break-word;

      ${theme.screenSizes.lg} {
        font-size: 25px;
        text-align: center;
      }
    }

    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 32px;
    }

    p {
      a {
        margin-right: 10px;
      }
    }

    .content p {
      line-height: 1.5;
      text-align: justify;
      margin: 22px 0px;
    }

    .flex-center {
      display: flex;
      justify-content: center;
    }
  `,
);
