import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="header">
    <h1 className="header-title">{title}</h1>
  </header>
);

export default Header;
