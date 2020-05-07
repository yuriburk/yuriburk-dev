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
    <SocialIcon icon={FaGithubAlt} url="https://github.com/yuriburk" />
    <SocialIcon
      icon={FaLinkedinIn}
      url="https://www.linkedin.com/in/jefferson-yuri-cunha-burk/"
    />
    <SocialIcon icon={FaInstagram} url="https://instagram.com/yuriburk" />
    <SocialIcon
      icon={FaGooglePlay}
      url="https://play.google.com/store/apps/dev?id=6777288266167396492"
    />
  </Container>
);

export default Socials;
