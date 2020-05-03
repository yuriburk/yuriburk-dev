import styled, { css } from 'styled-components';

import { theme, ThemeProps } from '../../styles/themes';

export const Container = styled.div`
  padding: 10px 0;

  h2 {
    font-size: 22px;
    font-weight: bold;
  }

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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.blue};
`;

interface ImageProps {
  url?: string;
}

export const ImageContainer = styled.div<ImageProps>`
  display: flex;
  flex: 1 1 40%;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 15px;
  border-radius: 5px;
`;
