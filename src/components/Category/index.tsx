import React from 'react';
import { kebabCase } from 'lodash';

import { Container } from './styles';

interface CategoryProps {
  title: string;
}

const Category: React.FC<CategoryProps> = ({ title }) => (
  <Container href={`/tag/${kebabCase(title)}`}>{title}</Container>
);

export default Category;
