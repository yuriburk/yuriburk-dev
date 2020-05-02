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

    h2 {
      color: ${dark ? theme.colors.primaryBlue : theme.colors.secundaryBlue};
    }

    a,
    p,
    div {
      font-size: 18px;
      color: ${dark ? theme.colors.secundaryWhite : theme.colors.primaryDark};
    }

    svg {
      cursor: pointer;
    }

    aside {
      flex: 0 0 33.3%;
      max-width: 33.333%;
      flex-direction: column;
      padding: 10px 0 0 15px;
    }

    .content {
      max-width: 1180px;
      margin: 0 auto;
      padding: 10px;
    }
  `,
);
