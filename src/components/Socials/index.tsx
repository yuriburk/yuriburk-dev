import React from 'react';
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaGooglePlay,
} from 'react-icons/fa';

import SocialIcon from './SocialIcon';

import { Container } from './styles';

const Socials: React.FC = () => (
  <Container>
    <SocialIcon
      icon={FaGithubAlt}
      url="https://github.com/yuriburk"
      color="#3e82c5"
    />
    <SocialIcon
      icon={FaLinkedinIn}
      url="https://www.linkedin.com/in/jefferson-yuri-cunha-burk/"
      color="#007fb1"
    />
    <SocialIcon
      icon={FaInstagram}
      url="https://instagram.com/yuriburk"
      color="#3d719d"
    />
    <SocialIcon
      icon={FaGooglePlay}
      url="https://play.google.com/store/apps/dev?id=6777288266167396492"
      color="#38bbc2"
    />
  </Container>
);

export default Socials;
