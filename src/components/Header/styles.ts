import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { theme, IThemeProps } from '../../styles/themes';

export const Container = styled.header(
  ({ dark }: IThemeProps) => css`
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.15);

    ${theme.screenSizes.lg} {
      padding-right: 0;
    }
  `,
);

export const Items = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  transition: transform 0.2s cubic-bezier(0, 1.8, 1, 1.8);

  &:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    font-weight: 800;
    font-size: 25px;
    color: ${theme.colors.blue};
    transition: color 0.2s;

    ${theme.screenSizes.lg} {
      font-size: 20px;
    }
  }
`;

export const Navigation = styled.div`
  ul {
    display: flex;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 1rem;

      ${theme.screenSizes.lg} {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          display: none;
        }
      }

      a {
        color: ${theme.colors.blue};
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.5, theme.colors.blue)};
        }
      }
    }
  }
`;

interface ButtonProps extends IThemeProps {
  hoverColor?: string;
  animate?: boolean;
}

export const Button = styled.button(
  ({ hoverColor, animate }: ButtonProps) => css`
    color: ${theme.colors.blue};
    transition: color 0.2s;

    ${animate &&
    css`
      @keyframes changeColor {
        from {
          color: ${hoverColor ?? 'white'};
        }
        to {
          color: ${theme.colors.blue};
        }
      }

      animation: changeColor 2.5s alternate-reverse 2;
    `}

    &:hover {
      ${hoverColor
        ? css`
            color: ${shade(0, hoverColor)};
          `
        : css`
            color: ${shade(0.5, theme.colors.blue)};
          `}
    }

    svg {
      width: 24px;
      height: 24px;

      ${theme.screenSizes.lg} {
        width: 20px;
        height: 20px;
      }
    }
  `,
);
