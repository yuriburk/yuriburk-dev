import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  padding: 1rem 1.5rem 1rem 1.5rem;
  background-color: #1a1a1d;
`;

export const Items = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  a {
    text-decoration: none;
    font-weight: 800;
    font-size: 22px;
    color: #5fffe9;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.8, '#5fffe9')};
    }
  }
`;

export const Navigation = styled.div`
  ul {
    display: flex;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 1rem;

      a {
        color: #5fffe9;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.8, '#5fffe9')};
        }
      }
    }
  }
`;

interface ButtonProps {
  hoverColor?: string;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 0;
  outline: 0;
  color: #5fffe9;
  transition: color 0.2s;

  &:hover {
    ${props =>
      props.hoverColor
        ? css`
            color: ${shade(0, props.hoverColor)};
          `
        : css`
            color: ${shade(0.8, '#5fffe9')};
          `}
  }
`;
