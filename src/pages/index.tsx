import React from 'react';
import { graphql } from 'gatsby';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface AppProps {
  frontmatter: {
    title: string;
    tags: string[];
    date: Date;
    description: string;
  };
}

const App: React.FC<AppProps> = ({ data }: any) => {
  return (
    <Layout>
      <SEO />
      <Posts data={data} />
    </Layout>
  );
};

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
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
