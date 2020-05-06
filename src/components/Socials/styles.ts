import styled from 'styled-components';
import { shade } from 'polished';

import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 25px 0;

  svg {
    color: ${theme.colors.blue};
    transition: color 0.2s;

    & + svg {
      margin-left: 15px;
    }

    &:hover {
      color: ${shade(0.5, theme.colors.blue)};
    }
  }
`;
