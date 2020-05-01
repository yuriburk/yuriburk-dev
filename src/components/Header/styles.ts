import styled from 'styled-components';
import { shade } from 'polished';

export const Component = styled.header`
  padding: 1rem 1.5rem 1rem 1.5rem;
  background-color: #1a1a1d;
`;

export const Title = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px;

  a {
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;
    color: #5fffe9;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.8, '#5fffe9')};
    }
  }
`;
