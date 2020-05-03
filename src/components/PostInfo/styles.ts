import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 25px 0;

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
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  a {
    text-decoration: none;

    & + a {
      margin-left: 10px;
    }
  }
`;

interface TagProps {
  clickable?: boolean;
}

export const Tag = styled.a(
  ({ clickable }: TagProps) => css`
    padding: 5px 5px;
    border-radius: 5px;
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
