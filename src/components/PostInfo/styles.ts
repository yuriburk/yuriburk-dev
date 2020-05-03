import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0 25px;

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
  }
`;

interface TagProps {
  clickable?: boolean;
}

export const Tag = styled.a(
  ({ clickable }: TagProps) => css`
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
  `,
);
