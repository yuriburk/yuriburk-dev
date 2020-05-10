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
      url="https://github.com/yuriburk"
      color={color}
    />
    <SocialIcon
      icon={FaLinkedinIn}
      url="https://www.linkedin.com/in/jefferson-yuri-cunha-burk/"
      color={color}
    />
    <SocialIcon
      icon={FaInstagram}
      url="https://instagram.com/yuriburk"
      color={color}
    />
    <SocialIcon
      icon={FaGooglePlay}
      url="https://play.google.com/store/apps/dev?id=6777288266167396492"
      color={color}
    />
  </Container>
);

export default Socials;
