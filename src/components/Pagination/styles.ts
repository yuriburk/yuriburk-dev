import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 15px;

  p {
    cursor: default;
    color: gray;
    margin: 0 15px;

    ${theme.screenSizes.lg} {
      display: none;
    }
  }
`;

export const Page = styled(Link)`
  display: flex;
  align-items: center;
  color: gray;
  margin-bottom: 20px;
  text-decoration: none;

  & + a {
    margin-left: 15px;
  }

  svg {
    margin: 0 10px;

    ${theme.screenSizes.lg} {
      width: 25px;
      height: 25px;
    }
  }

  p {
    cursor: pointer;
  }
`;
