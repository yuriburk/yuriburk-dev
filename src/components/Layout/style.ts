import { createGlobalStyle, css } from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export default createGlobalStyle(
  ({ dark, theme }: ThemeProps) => css`
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
    }

    html,
    body {
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
      flex: 0 0 71%;

      ${theme.screenSizes.xl} {
        flex: 1 1 100%;
      }
    }

    aside {
      flex: 0 0 29%;
      flex-direction: column;
      padding: 10px 0;

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

    .content {
      max-width: 1180px;
      margin: 0 auto;
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
