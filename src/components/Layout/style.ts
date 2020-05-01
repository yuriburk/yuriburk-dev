import { createGlobalStyle, css } from 'styled-components';

import { Theme } from '../../styles/themes';

interface ThemeProps {
  dark: boolean;
  theme: Theme;
}

export default createGlobalStyle(
  (props: ThemeProps) => css`
    header,
    body {
      -webkit-font-smoothing: antialiased;
      font-family: 'Montserrat', sans-serif;
      text-rendering: optimizeLegibility !important;
    }

    body {
      color: #fff;
      font-weight: 500;
      background-color: ${props.dark
        ? props.theme.colors.darkBackground
        : props.theme.colors.whiteBackground};
    }

    html,
    body {
      height: 100%;
    }

    p,
    div {
      font-size: 18px;
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
