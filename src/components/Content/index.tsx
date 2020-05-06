import React from 'react';

import { Container, Center } from './styles';

interface ContentProps {
  image: string;
  html: string;
}

const Content: React.FC<ContentProps> = ({ image, html }) => (
  <Container>
    <Center>{image && <img src={image} alt="post-img" />}</Center>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Container>
);

export default Content;
