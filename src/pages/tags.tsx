import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Component from '../components/Tags';

const Container = styled.div`
  padding: 15px;
  border-radius: 0.5rem;
  background-color: white;
`;

const Tags: React.FC = () => (
  <Layout showSidebar={false}>
    <Container>
      <h1>Assuntos já abordados no blog:</h1>
      <Component />
    </Container>
  </Layout>
);

export default Tags;
