import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Category from './Category';

const Categories: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query CategoriesQuery {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  category
                }
              }
            }
          }
        }
      `}
      render={(query: object) => {
        return (
          <div>
            {query.allMarkdownRemark.edges
              ?.filter(edge => edge.node.frontmatter.category)
              .map(edge => {
                const { category } = edge.node.frontmatter;
                return <Category key={category} title={category} />;
              })}
          </div>
        );
      }}
    />
  );
};

export default Categories;
