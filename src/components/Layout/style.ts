import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

  header {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background-color: #202535;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  p, div {
    font-size: 19px;
  }
`;
