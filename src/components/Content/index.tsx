import React from 'react';

import { Container, ImageContainer, SocialsContainer } from './styles';
import Socials from '../Socials';

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
    <SocialsContainer>
      <Socials color="#55585b" />
    </SocialsContainer>
  </Container>
);

export default Content;
