import styled, { css } from 'styled-components';

import { theme, ThemeProps } from '../../styles/themes';

export const Container = styled.div`
  padding: 10px;

  p {
    .post-date {
      margin-bottom: 5px;
    }
  }
`;

export const Post = styled.div(
  ({ dark }: ThemeProps) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${theme.screenSizes.lg} {
      flex-direction: column;
    }

    cursor: pointer;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;

    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
    transition: box-shadow 0.2s, transform 0.2s;

    &:hover {
      height: 110%;
      box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.15);
      transform: scale(1.02);
    }
  `,
);

export const ImageContainer = styled.div`
  display: flex;
  flex: 1 1 25%;
  margin-right: 15px;

  ${theme.screenSizes.lg} {
    margin-right: 0px;
    justify-content: center;
  }

  img {
    border-radius: 5px;

    ${theme.screenSizes.lg} {
      width: 80px;
      margin-bottom: 15px;
    }
  }

  /* ${theme.screenSizes.lg} {
    display: none;
  } */
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1 1 75%;
  flex-direction: column;

  ${theme.screenSizes.lg} {
    text-align: center;
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: ${theme.colors.blue};
  word-break: break-word;

  ${theme.screenSizes.lg} {
    text-align: center;
    justify-content: center;
  }

  h2 {
    font-size: 25.5px;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  svg {
    min-width: 25px;
    min-height: 25px;
    margin-left: 25px;

    ${theme.screenSizes.lg} {
      display: none;
    }
  }
`;
