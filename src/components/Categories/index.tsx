import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Category from './Category';
import IAllMarkdownRemark from '../../interfaces/IAllMarkdownRemark';

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
      render={(query: IAllMarkdownRemark) => {
        const categories = Array.from(
          new Set(
            query.allMarkdownRemark.edges
              ?.filter(edge => edge.node.frontmatter.category)
              .map(edge => {
                const { category } = edge.node.frontmatter;
                return category;
              }),
          ),
        );

        return (
          <div>
            {categories?.map(category => (
              <Category key={category} title={category} />
            ))}
          </div>
        );
      }}
    />
  );
};

export default Categories;
