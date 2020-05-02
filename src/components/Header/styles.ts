import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.header(
  ({ dark, theme }: ThemeProps) => css`
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.15);
  `,
);

export const Items = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    a {
      text-decoration: none;
      font-weight: 800;
      font-size: 22px;
      color: ${dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue};
      transition: color 0.2s;

      &:hover {
        color: ${shade(
          0.5,
          dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue,
        )};
      }
    }
  `,
);

export const Navigation = styled.div(
  ({ dark, theme }: ThemeProps) => css`
    ul {
      display: flex;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 1rem;

        a {
          color: ${dark
            ? theme.colors.primaryBlue
            : theme.colors.secundaryBlue};
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: ${shade(
              0.5,
              dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue,
            )};
          }
        }
      }
    }
  `,
);

interface ButtonProps extends ThemeProps {
  hoverColor?: string;
}

export const Button = styled.button(
  ({ dark, theme, hoverColor }: ButtonProps) => css`
    background: transparent;
    border: 0;
    outline: 0;
    color: ${dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue};
    transition: color 0.2s;

    &:hover {
      ${hoverColor
        ? css`
            color: ${shade(0, hoverColor)};
          `
        : css`
            color: ${shade(
              0.5,
              dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue,
            )};
          `}
    }
  `,
);
