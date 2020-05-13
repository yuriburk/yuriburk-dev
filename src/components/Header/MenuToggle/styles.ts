import styled, { css } from 'styled-components';

interface IContainerProps {
  isOpened?: boolean;
}

export const Container = styled.div<IContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 35px;
  height: 100%;
  z-index: 9999;
  box-sizing: border-box;

  & span {
    position: relative;
    display: block;
    background: ${({ theme }) => theme.colors.blue};
    width: 28px;
    height: 2px;
    transition: 0.5s ease-in-out;

    &:before,
    &:after {
      background: ${({ theme }) => theme.colors.blue};
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    ${({ theme }) => theme.screenSizes.lg} {
      &:before {
        top: -8px;
      }

      &:after {
        bottom: -8px;
      }
    }
  }

  ${props =>
    props.isOpened &&
    css`
      overflow: hidden;
      span {
        transform: rotate(45deg);

        &:before {
          top: 0;
          transform: rotate(90deg);
        }

        &:after {
          transform: rotate(90deg);
          bottom: 0;
        }
      }
    `}
`;
