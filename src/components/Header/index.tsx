import React, { useEffect, useState, useCallback } from 'react';
import { Link, navigate } from 'gatsby';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';

import MenuToggle from './Menu/Toggle';
import { useTheme } from '../../hooks/theme';
import logo from '../../../static/img/logo-header.png';
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
          <Link to="/">
            <img src={logo} alt="logo" />
            Yuri Burk
          </Link>
        </Title>
        <Navigation>
          <nav>
            <ul>
              <li>
                <Link className="hide-small" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="hide-small" to="/about">
                  sobre mim
                </Link>
              </li>
              <li>
                <Button dark>
                  <FaSearch onClick={() => navigate('/search')} />
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
