import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Container, Page } from './styles';

interface PaginationProps {
  currentPage: number;
  nextPagePath: string;
  previousPagePath: string;
  pages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  nextPagePath,
  previousPagePath,
  pages,
}) => (
  <Container>
    {currentPage > 1 && (
      <Page to={previousPagePath}>
        <FaArrowLeft size={20} />
        <p>Página anterior</p>
      </Page>
    )}
    {currentPage > 1 && currentPage < pages && <p>|</p>}
    {currentPage < pages && (
      <Page to={nextPagePath}>
        <p>Próxima página</p>
        <FaArrowRight size={20} />
      </Page>
    )}
  </Container>
);

export default Pagination;
