import React, { useEffect, useState, useCallback } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';
import { Container, Items, Title, Navigation, Button } from './styles';

const Header: React.FC = () => {
  const { dark, toggleTheme } = useTheme();
  const [firstLoad, setFirstLoad] = useState(false);

  const checkFirstPageLoad = useCallback(() => {
    const firstPageLoad = localStorage.getItem('@YuriBurk.dev:firstLoad');

    if (firstPageLoad === null) {
      setFirstLoad(true);
      localStorage.setItem('@YuriBurk.dev:firstLoad', JSON.stringify(true));
    }
  }, []);

  useEffect(() => checkFirstPageLoad(), [checkFirstPageLoad]);

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
        <Container dark={dark}>
          <Items>
            <Title dark={dark}>
              <Link to="/" title={data.site.siteMetadata.title}>
                {'<YuriBurk />'}
              </Link>
            </Title>
            <Navigation dark={dark}>
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
                    <Button dark={dark} type="button">
                      <FaSearch size={24} />
                    </Button>
                  </li>
                  <li>
                    <Button
                      dark={dark}
                      type="button"
                      onClick={toggleTheme}
                      hoverColor="#d9dc25"
                      animate={firstLoad}
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
