import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';

import MenuToggle from './MenuToggle';
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
    <Container dark={dark}>
      <Items>
        <Title>
          <Link to="/">{'<YuriBurk />'}</Link>
        </Title>
        <Navigation>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Button dark>
                  <FaSearch />
                </Button>
              </li>
              <li>
                <Button
                  dark={dark}
                  onClick={toggleTheme}
                  hoverColor="#d9dc25"
                  animate={firstLoad}
                >
                  {dark ? <FaSun /> : <FaMoon />}
                </Button>
              </li>
              <li className="menu-toggle">
                <MenuToggle />
              </li>
            </ul>
          </nav>
        </Navigation>
      </Items>
    </Container>
  );
};

export default Header;
