import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 15px;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;

    h2 {
      margin-bottom: 5px;
      font-size: 22px;
      font-weight: bold;
    }
  }

  p {
    .post-date {
      margin-bottom: 5px;
    }
  }
`;

export const Post = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: #1a1a1d;
`;
