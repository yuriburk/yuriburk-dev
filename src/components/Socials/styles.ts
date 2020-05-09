import styled from 'styled-components';

import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px;

  ${theme.screenSizes.xxl} {
    display: none;
  }
`;
