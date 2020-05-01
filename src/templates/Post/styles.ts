import styled from 'styled-components';

export const Container = styled.div`
  background-color: #151822;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 10px 15px;

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    a {
      color: #505050;
      margin-right: 10px;
    }
  }

  .content p {
    line-height: 1.5;
    text-align: justify;
    margin: 22px 0px;
  }
`;
