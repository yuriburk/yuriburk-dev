import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';
import { Container, Items, Title, Navigation, Button, Icon } from './styles';

const Header: React.FC = () => {
  const { dark, toggleTheme } = useTheme();

  return (
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
        <Container>
          <Items>
            <Title>
              <Link to="/" title={data.site.siteMetadata.title}>
                {'<YuriBurk />'}
              </Link>
            </Title>
            <Navigation>
              <nav>
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/">about</Link>
                  </li>
                  <li>
                    <Link to="/">tags</Link>
                  </li>
                  <li>
                    <Button type="button">
                      <FaSearch size={24} />
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="button"
                      onClick={toggleTheme}
                      hoverColor="#d9dc25"
                    >
                      {dark ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </Button>
                  </li>
                </ul>
              </nav>
            </Navigation>
          </Items>
        </Container>
      )}
    />
  );
};

export default Header;
