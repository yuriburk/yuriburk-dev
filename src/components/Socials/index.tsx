import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

import { Container } from './styles';

const Socials: React.FC = () => (
  <Container>
    <FaGithub size={45} />
    <FaLinkedin size={45} />
    <FaFacebook size={45} />
    <FaTwitter size={45} />
  </Container>
);

export default Socials;
