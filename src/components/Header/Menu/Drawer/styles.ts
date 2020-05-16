import styled, { css } from 'styled-components';

import { theme } from '../../../../styles/themes';

interface IContainerProps {
  dark: boolean;
  open: boolean;
}

export const Container = styled.div(
  ({ dark, open }: IContainerProps) => css`
    position: fixed;
    width: 100%;
    height: 100vh;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: ${dark
      ? theme.colors.primaryDark
      : theme.colors.primaryWhite};
    padding: 15px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${open ? 'translateX(0)' : 'translateX(100%)'};

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      li {
        padding: 0 10px;
        margin: 2.5rem 0;
        font-weight: bold;

        a {
          display: flex;
          font-size: 2.5rem;
        }
      }
    }
  `,
);
