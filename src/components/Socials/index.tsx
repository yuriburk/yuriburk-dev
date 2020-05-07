import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Container } from './styles';

const Socials: React.FC = () => (
  <Container>
    <FaGithub size={45} />
    <FaLinkedin size={45} />
    <FaInstagram size={45} />
    <FaTwitter size={45} />
  </Container>
);

export default Socials;
