import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 25px;

  h1 {
    font-size: 35px;
    font-weight: 800;
    word-break: break-word;
    margin-bottom: 10px;

    ${theme.screenSizes.lg} {
      font-size: 28px;
      text-align: center;
    }
  }

  a {
    font-size: 15px;
    font-weight: 600;
    color: ${theme.colors.primaryWhite};
  }

  svg {
    margin: 0 10px;
    color: ${theme.colors.blue};
  }

  p {
    font-size: 15px;
  }

  ${theme.screenSizes.lg} {
    flex-direction: column;

    svg {
      display: none;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${theme.screenSizes.lg} {
    flex-direction: column;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  ${theme.screenSizes.lg} {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

interface ITagProps {
  clickable?: boolean;
}

export const Tag = styled.a(
  ({ clickable }: ITagProps) => css`
    padding: 5px 5px;
    border-radius: 5px;
    margin: 10px 10px 10px 0;
    background-color: ${theme.colors.blue};
    transition: background-color 0.2s;

    ${clickable &&
    css`
      &:hover {
        background-color: ${shade(0.5, theme.colors.blue)};
      }
    `}

    ${theme.screenSizes.lg} {
      margin: 2.5px 5px 2.5px 0;
    }
  `,
);
