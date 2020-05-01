import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import { Component, Title } from './styles';

const Header: React.FC = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Component>
        <Title>
          <Link to="/">
            <p>{data.site.siteMetadata.title}</p>
          </Link>
        </Title>
      </Component>
    )}
  />
);

export default Header;
