import React from 'react';
import { kebabCase } from 'lodash';

import { Container } from './styles';

interface ITagProps {
  title: string;
}

const Tag: React.FC<ITagProps> = ({ title }) => (
  <Container to={`/tag/${kebabCase(title)}`}>{title}</Container>
);

export default Tag;
