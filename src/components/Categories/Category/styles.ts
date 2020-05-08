import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'gatsby';

import { theme } from '../../../styles/themes';

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: 15px 15px 0 15px;
  background-color: ${theme.colors.blue};
  text-decoration: none;
  font-weight: 600;
  color: ${theme.colors.primaryWhite};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.5, theme.colors.blue)};
  }
`;
