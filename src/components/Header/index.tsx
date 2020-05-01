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
          <Link to="/" title={data.site.siteMetadata.title}>
            {'<YuriBurk />'}
          </Link>
        </Title>
      </Component>
    )}
  />
);

export default Header;
