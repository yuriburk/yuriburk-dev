import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  button {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }

    & + button {
      margin-left: 15px;
    }
  }
`;
