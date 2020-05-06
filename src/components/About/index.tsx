import React from 'react';

import Socials from '../Socials';
import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

const About: React.FC = () => (
  <Container dark={useTheme().dark}>
    <h2>Sobre mim</h2>
    <Socials />
    <p>Desenvolvedor fullstack</p>
  </Container>
);

export default About;
