import styled, { css } from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 10px 0;

    h2 {
      font-size: 22px;
      font-weight: 800;
    }

    p {
      a {
        color: #6fffe9;
        margin-right: 10px;
      }
    }

    .content p {
      line-height: 1.5;
      text-align: justify;
      margin: 22px 0px;
    }
  `,
);
