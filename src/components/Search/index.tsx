import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Index } from 'elasticlunr';
import { FaTimes } from 'react-icons/fa';

import Layout from '../Layout';
import { useTheme } from '../../hooks/theme';
import { SearchContainer } from './styles';
import SEO from '../SEO';

const Search: React.FC = () => {
  const { dark } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `);

  const getOrCreateIndex = (): any => {
    if (selectedIndex) return selectedIndex;

    const { index } = data.siteSearchIndex;
    return Index.load(index);
  };

  const search = (evt: any): void => {
    const newIndex = getOrCreateIndex();
    if (selectedIndex !== newIndex) {
      setSelectedIndex(newIndex);
    }

    console.log(
      newIndex
        .search(evt.target.value, {})
        .map(({ ref }: any) => newIndex.documentStore.getDoc(ref)),
    );

    setQuery(evt.target.value);
    setResults(
      newIndex
        .search(evt.target.value, {})
        .map(({ ref }: any) => newIndex.documentStore.getDoc(ref)),
    );
  };

  return (
    <Layout showSidebar={false}>
      <SEO
        title="Pesquisar posts"
        description="Pesquise o assunto que desejar aqui"
      />
      <h1>Pesquise alguma coisa aqui</h1>
      <SearchContainer dark={dark}>
        <input type="text" id="searchInput" value={query} onChange={search} />
        <FaTimes size={25} onClick={() => setQuery('')} />
      </SearchContainer>
      {results.map((page: any) => (
        <li key={page.id}>
          <Link to={`/${page.slug}`}>{`${page.title}`}</Link>
        </li>
      ))}
    </Layout>
  );
};

export default Search;
