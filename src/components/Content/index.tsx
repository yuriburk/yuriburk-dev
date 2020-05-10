import React from 'react';

import { Container, Center } from './styles';

interface IContentProps {
  image: string;
  html: string;
}

const Content: React.FC<IContentProps> = ({ image, html }) => (
  <Container>
    <Center>{image && <img src={image} alt="post-img" />}</Center>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Container>
);

export default Content;
