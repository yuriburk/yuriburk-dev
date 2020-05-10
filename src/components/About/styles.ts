import styled from 'styled-components';

import wallpaper from '../../../content/images/about-wallpaper.png';
import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -4rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  h2 {
    font-size: 25px;
    font-weight: 800;
    word-break: break-word;
    margin: 45px 0;
  }

  p {
    text-align: justify;
    line-height: 1.5;
  }
`;

export const Wallpaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  background-image: url(${wallpaper});
  background-position: center;
  background-size: cover;

  img {
    border-radius: 50%;
    width: 225px;
    height: 225px;
    -webkit-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.75);
  }

  h1 {
    font-size: 25.5px;
    font-weight: 800;
    margin-top: 15px;
    color: ${theme.colors.primaryWhite};
    background-color: rgba(28, 28, 40, 0.75);
    padding: 5px;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  padding: 15px;

  a {
    color: ${theme.colors.blue};
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${theme.screenSizes.xl} {
    flex-direction: column;
  }

  h4 {
    font-weight: 800;
    margin-bottom: 5px;
  }

  div {
    flex: 1;
    width: 0;

    ${theme.screenSizes.xl} {
      width: 100%;
    }

    margin-left: 15px;

    img {
      border-radius: 5px;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.05);

        ${theme.screenSizes.xl} {
          transform: none;
        }
      }
    }
  }

  p + p {
    margin-top: 15px;
  }

  & + div {
    margin-top: 50px;
  }
`;
