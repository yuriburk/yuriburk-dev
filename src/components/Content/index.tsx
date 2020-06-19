import React from 'react';

import { Container, ImageContainer } from './styles';

interface IContentProps {
  image: string;
  html: string;
}

const Content: React.FC<IContentProps> = ({ image, html }) => (
  <Container>
    <ImageContainer>
      {image && <img src={image} alt="post-img" />}
    </ImageContainer>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Container>
);

export default Content;
