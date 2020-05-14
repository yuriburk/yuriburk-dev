import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import Layout from '../Layout';
import { useTheme } from '../../hooks/theme';
import { Container, SearchContainer } from './styles';

const Search: React.FC = () => {
  const { dark } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleCloseInput = (): void => {
    setInputValue('');
  };

  return (
    <Layout showSidebar={false}>
      <Container dark={dark}>
        <h1>Pesquise alguma coisa aqui:</h1>
        <SearchContainer dark={dark}>
          <input
            type="text"
            id="searchInput"
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
          />
          <FaTimes size={25} onClick={handleCloseInput} />
        </SearchContainer>
      </Container>
    </Layout>
  );
};

export default Search;
