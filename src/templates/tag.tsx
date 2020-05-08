import React from 'react';
import { graphql } from 'gatsby';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface TagProps {
  data: any;
  pathContext: {
    tag: any;
  };
  location: {
    pathname: string;
  };
}

const Tag: React.FC<TagProps> = ({ data, pathContext, location }) => (
  <Layout>
    <div>
      <SEO
        title={`Tag: ${pathContext.tag}`}
        description={`Todos os posts marcados com a tag "${pathContext.tag}" no blog do Yuri Burk`}
        url={location.pathname}
      />
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            tags
            description
            image
          }
          timeToRead
        }
      }
    }
  }
`;
