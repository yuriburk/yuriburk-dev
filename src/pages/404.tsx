import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PageNotFound: React.FC = () => (
  <Layout>
    <SEO title="Page not found" />
    <p>Infelizmente a página desejada não pode ser encontrada!</p>
  </Layout>
);

export default PageNotFound;
