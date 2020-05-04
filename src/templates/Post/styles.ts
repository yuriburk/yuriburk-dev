import styled, { css } from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    display: flex;
    flex-direction: column;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    padding: 1.8rem;
    border-radius: 0.5rem;
    margin: 10px;

    .content {
      display: flex;
      flex-direction: column;

      img {
        margin: 25px;
      }

      h1 {
        font-size: 35px;
      }

      ul {
        list-style: disc;
        margin-left: 21px;
      }

      ol {
        li {
          margin-left: 21px;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 800;
        word-break: break-word;
        margin: 25px 0;
      }

      h2,
      h3,
      h4,
      h5 {
        font-size: 28px;
      }

      p {
        line-height: 1.5;
        text-align: justify;
      }

      a {
        color: ${theme.colors.blue};
      }

      code {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
      }
    }

    .content .flex-center {
      display: flex;
      justify-content: center;
    }
  `,
);
