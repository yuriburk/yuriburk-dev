import styled from 'styled-components';

interface IContainerProps {
  open: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #ffffff;
  padding: 15px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};

  .dark & {
    background-color: #393e46;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    li {
      padding: 05px 10px;
      margin: 0;
      margin: 25px 0;
      font-weight: bold;

      a {
        display: flex;
        font-size: 2rem;
      }
    }
  }
`;
