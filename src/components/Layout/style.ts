import styled, { createGlobalStyle, css } from 'styled-components';

import { theme } from '../../styles/themes';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 4rem;
`;

interface IGlobalStyleProps {
  dark: boolean;
  isLayoutActive: boolean;
}

export default createGlobalStyle(
  ({ dark, isLayoutActive }: IGlobalStyleProps) => css`
    header,
    body {
      -webkit-font-smoothing: antialiased;
      font-family: 'Montserrat', sans-serif;
      text-rendering: optimizeLegibility !important;
    }

    body {
      color: #fff;
      font-weight: 500;
      background-color: ${dark
        ? theme.colors.primaryDark
        : theme.colors.primaryWhite};
      overflow-x: hidden;

      ${isLayoutActive &&
      css`
        ${theme.screenSizes.lg} {
          overflow-y: hidden;
        }
      `}
    }

    html,
    body,
    content {
      height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      color: ${theme.colors.blue};
    }

    p,
    div {
      font-size: 18px;
      color: ${dark ? theme.colors.secundaryWhite : theme.colors.primaryDark};
    }

    svg {
      cursor: pointer;
    }

    main {
      flex: 1 1 71%;
      padding: 0 8px;
      min-height: 100vh;
      height: max-content;

      ${theme.screenSizes.xl} {
        flex: 1 1 100%;
      }
    }

    aside {
      flex: 0 0 29%;
      padding: 0 8px;
      flex-direction: column;

      ${theme.screenSizes.xl} {
        display: none;
      }
    }

    button {
      cursor: pointer;
      background: transparent;
      border: 0;
      outline: 0;
    }

    ::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(0, 0, 0, 0.09);
      border-radius: 100px;
    }

    ::-webkit-scrollbar:hover {
      background-color: rgba(0, 0, 0, 0.18);
    }

    ::-webkit-scrollbar-thumb:vertical {
      background: ${theme.colors.blue};
      border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb:vertical:active {
      background: ${theme.colors.blue};
      border-radius: 100px;
    }

    pre::-webkit-scrollbar {
      height: 8px;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 100px;
    }

    pre::-webkit-scrollbar:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }

    pre::-webkit-scrollbar-thumb {
      background: ${theme.colors.blue};
      border-radius: 100px;
    }

    pre::-webkit-scrollbar-thumb:active {
      background: ${theme.colors.blue};
      border-radius: 100px;
    }
  `,
);
