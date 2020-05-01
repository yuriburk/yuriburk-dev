import React from 'react';
import { graphql } from 'gatsby';
import 'minireset.css';

import Posts from '../components/Posts';
import Layout from '../components/Layout';

interface AppProps {
  data: any;
}

const App: React.FC<AppProps> = ({ data }) => (
  <Layout>
    <Posts data={data} />
  </Layout>
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
