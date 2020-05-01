import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  header, body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    color: #fff;
    font-weight: 500;
    background-color: #202535;
  }

  html, body {
    height: 100%;
  }

  p, div {
    font-size: 18px;
  }

  aside {
    flex: 0 0 33.3%;
    max-width: 33.333%;
    flex-direction: column;
    padding: 10px;
  }
`;
