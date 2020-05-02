import styled, { css } from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div`
  padding: 10px 0;
  width: 100%;

  a {
    text-decoration: none;

    h2 {
      margin-bottom: 5px;
      font-size: 22px;
      font-weight: bold;
    }
  }

  p {
    .post-date {
      margin-bottom: 5px;
    }
  }
`;

export const Post = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
  `,
);
