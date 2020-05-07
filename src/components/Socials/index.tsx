import React from 'react';
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaGooglePlay,
} from 'react-icons/fa';

import { Container, SocialIcon } from './styles';

const Socials: React.FC = () => (
  <Container>
    <SocialIcon>
      <FaGithubAlt size={35} />
    </SocialIcon>
    <SocialIcon>
      <FaLinkedinIn size={35} />
    </SocialIcon>
    <SocialIcon>
      <FaInstagram size={35} />
    </SocialIcon>
    <SocialIcon>
      <FaGooglePlay size={35} />
    </SocialIcon>
  </Container>
);

export default Socials;
