import React from 'react';
import { graphql } from 'gatsby';
import 'minireset.css';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { ThemeProvider } from '../hooks/theme';

interface AppProps {
  data: any;
}

const App: React.FC<AppProps> = ({ data }) => (
  <ThemeProvider>
    <Layout>
      <SEO />
      <Posts data={data} />
    </Layout>
  </ThemeProvider>
);

export default App;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
