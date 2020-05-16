import styled, { css } from 'styled-components';

import { IThemeProps } from '../../styles/themes';

export const SearchContainer = styled.div(
  ({ dark, theme }: IThemeProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.blue};
    width: 100%;
    max-width: 1165px;
    padding: 2.5px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 0.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};

    input {
      padding: 0 15px;
      outline: 0;
      border: 0;
      width: 100%;
      background-color: ${dark
        ? theme.colors.secundaryDark
        : theme.colors.secundaryWhite};
      color: ${theme.colors.blue};
      font-size: 15px;
    }

    svg {
      margin-right: 15px;
    }
  `,
);

export const Page = styled.div(
  ({ dark, theme }: IThemeProps) => css`
    margin: 15px 0;
    padding: 15px;
    border-radius: 0.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};

    a {
      color: ${theme.colors.blue};
      text-decoration: none;
    }
  `,
);

interface IImageContainerProps {
  hide: boolean;
}

export const ImageContainer = styled.div<IImageContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  visibility: visible;
  opacity: 1;
  transition: visibility 0.15s, opacity 0.5s;
  ${({ hide }) =>
    hide &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

  img {
    opacity: 0.5;
  }
`;
