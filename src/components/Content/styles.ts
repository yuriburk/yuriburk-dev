import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 1.5;

  img {
    margin: 25px;
  }

  h1 {
    font-size: 35px;

    ${theme.screenSizes.lg} {
      font-size: 28px;
    }
  }

  ul {
    list-style: disc;
    margin-left: 21px;
  }

  ol {
    li {
      margin-left: 21px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    word-break: break-word;
    margin: 25px 0;
  }

  h2,
  h3,
  h4,
  h5 {
    font-size: 28px;

    ${theme.screenSizes.lg} {
      font-size: 25px;
    }
  }

  p {
    text-align: justify;
  }

  a {
    color: ${theme.colors.blue};
  }

  code {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;
