import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

interface ISearchProps {
  searching: boolean;
  handleClose(): void;
}

const Search: React.FC<ISearchProps> = ({ searching, handleClose }) => {
  const { dark } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleCloseInput = (): void => {
    setInputValue('');
    handleClose();
  };

  return (
    <Container dark={dark} searching={searching}>
      <input
        type="text"
        id="searchInput"
        value={inputValue}
        onChange={e => setInputValue(e.currentTarget.value)}
      />
      <FaTimes size={25} onClick={handleCloseInput} />
    </Container>
  );
};

export default Search;
