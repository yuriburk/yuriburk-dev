import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;

  img {
    margin: 25px 0;
  }

  h1 {
    font-size: 35px;

    ${theme.screenSizes.lg} {
      font-size: 28px;
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

  .language-text {
    padding: 2.5px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 350px;
  }
`;
