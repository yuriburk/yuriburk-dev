import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Tag from './Tag';
import IAllMarkdownRemark from '../../interfaces/IAllMarkdownRemark';

const Tags: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query CategoriesQuery {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={(query: IAllMarkdownRemark) => {
        const tagsList = [] as string[];
        query.allMarkdownRemark.edges
          ?.filter(edge => edge.node.frontmatter.tags)
          .forEach(edge => {
            edge.node.frontmatter.tags.forEach(tag => {
              if (!tagsList.includes(tag)) {
                tagsList.push(tag);
              }
            });
          });

        return (
          <div>
            {tagsList?.map(tag => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
        );
      }}
    />
  );
};

export default Tags;
