import styled, { css } from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    padding: 1.8rem;
    border-radius: 0.5rem;
    margin: 10px 0;

    h2 {
      font-size: 35px;
      font-weight: 800;
      margin-bottom: 15px;
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

    .flex-center {
      display: flex;
      justify-content: center;
    }
  `,
);

export const PostInfo = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 25px 0 55px 0;

    a {
      font-size: 15px;
    }

    svg {
      margin: 0 10px;
      color: ${dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue};
    }

    p {
      font-size: 15px;
    }
  `,
);

export const Tag = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    display: flex;
    align-items: center;

    a {
      padding: 2.5px 5px;
      border-radius: 5px;
      text-decoration: none;
      color: ${theme.colors.primaryWhite};
      background-color: ${dark
        ? theme.colors.primaryBlue
        : theme.colors.secundaryBlue};

      & + a {
        margin-left: 10px;
      }
    }
  `,
);
