import React from 'react';
import { graphql } from 'gatsby';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface CategoryProps {
  data: any;
  pathContext: {
    category: any;
  };
  location: {
    pathname: string;
  };
}

const Category: React.FC<CategoryProps> = ({ data, pathContext, location }) => {
  return (
    <Layout>
      <div>
        <SEO
          title={`Categoria: ${pathContext.category}`}
          description={`Todos os posts marcados com a categoria "${pathContext.category}" no blog do Yuri Burk`}
          url={location.pathname}
        />
        <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>
          Todos os posts com a categoria: {pathContext.category}
        </h2>
        <Posts data={data} />
      </div>
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            category
            description
            image
            tags
          }
          timeToRead
        }
      }
    }
  }
`;
