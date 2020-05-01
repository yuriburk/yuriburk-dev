import React from 'react';
import { graphql } from 'gatsby';

import Posts from '../components/Posts';
import Layout from '../components/Layout';

interface TagProps {
  data: any;
  pathContext: {
    tag: any;
  };
}

const Tag: React.FC<TagProps> = ({ data, pathContext }) => (
  <Layout>
    <div>
      <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>
        Todos os posts com a tag: {pathContext.tag}
      </h2>
      <Posts data={data} />
    </div>
  </Layout>
);

export default Tag;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
