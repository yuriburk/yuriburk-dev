import React from 'react';
import GitHubButton from 'react-github-btn';

import { Container } from './styles';
import { useTheme } from '../../hooks/theme';

const Footer: React.FC = () => {
  const { dark } = useTheme();

  return (
    <Container dark={dark}>
      <span role="img" aria-label="Made with love by Yuri Burk">
        Made with 💓 by Yuri Burk
      </span>
      <GitHubButton
        href="https://github.com/yuriburk/yuriburk-dev"
        aria-label="Star yuriburk/yuriburk-dev on Github"
      >
        Star
      </GitHubButton>
    </Container>
  );
};

export default Footer;
