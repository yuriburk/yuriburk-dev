import React from 'react';
import { graphql } from 'gatsby';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import IAllMarkdownRemark from '../interfaces/IAllMarkdownRemark';

interface IAppProps {
  data: IAllMarkdownRemark;
  pageContext: {
    humanPageNumber: number;
    nextPagePath: string;
    previousPagePath: string;
    numberOfPages: number;
  };
}

const App: React.FC<IAppProps> = ({ data, pageContext }) => {
  return (
    <Layout>
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
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
            image
            smallImage
            slug
          }
        }
      }
    }
  }
`;
