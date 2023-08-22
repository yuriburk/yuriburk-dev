import React from 'react';
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaGooglePlay,
} from 'react-icons/fa';

import SocialIcon from './SocialIcon';

import { Container } from './styles';

interface ISocialsProps {
  color?: string;
}

const Socials: React.FC<ISocialsProps> = ({ color }) => (
  <Container>
    <SocialIcon
      icon={FaGithubAlt}
      url="https://github.com/"
      color={color}
    />
    <SocialIcon
      icon={FaLinkedinIn}
      url="https://www.linkedin.com/"
      color={color}
    />
    <SocialIcon
      icon={FaInstagram}
      url="https://instagram.com/"
      color={color}
    />
    <SocialIcon
      icon={FaGooglePlay}
      url="https://play.google.com/"
      color={color}
    />
  </Container>
);

export default Socials;
