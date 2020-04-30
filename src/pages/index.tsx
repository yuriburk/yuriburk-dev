import React from 'react';
import { graphql } from 'gatsby';
import 'minireset.css';

import GlobalStyle from '../styles/global';
import Layout from '../components/Layout';

interface AppProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}

const App: React.FC<AppProps> = ({ data }) => (
  <>
    <Layout title={data.site.siteMetadata.title}>
      <p>{data.site.siteMetadata.description}</p>
    </Layout>
    {/* <GlobalStyle /> */}
  </>
);

export default App;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
