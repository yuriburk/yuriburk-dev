import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import { Component } from './styles';

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
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      </Component>
    )}
  />
);

export default Header;
