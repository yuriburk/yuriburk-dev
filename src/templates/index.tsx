import React from 'react';
import { graphql } from 'gatsby';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';

interface AppProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            tags: string[];
            date: Date;
            description: string;
            category: string;
          };
          timeToRead: number;
        };
      }[];
    };
  };
  pageContext: {
    humanPageNumber: number;
    nextPagePath: string;
    previousPagePath: string;
    numberOfPages: number;
  };
}

const App: React.FC<AppProps> = ({ data, pageContext }) => {
  return (
    <Layout
      categories={data.allMarkdownRemark.edges
        .filter(x => x.node.frontmatter.category)
        .map(x => {
          const { category } = x.node.frontmatter;
          return category;
        })}
    >
      <SEO />
      <Posts data={data} />
      <Pagination
        currentPage={pageContext.humanPageNumber}
        nextPagePath={pageContext.nextPagePath}
        previousPagePath={pageContext.previousPagePath}
        pages={pageContext.numberOfPages}
      />
    </Layout>
  );
};

export default App;

export const pageQuery = graphql`
  query QueryIndex($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
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
            image
            category
          }
        }
      }
    }
  }
`;
