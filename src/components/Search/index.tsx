import React, { useState, useCallback } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { Index, SerialisedIndexData, SearchResults } from 'elasticlunr';
import { FaTimes } from 'react-icons/fa';

import noResults from '../../../content/images/no-results.png';
import Layout from '../Layout';
import SEO from '../SEO';
import { useTheme } from '../../hooks/theme';
import { SearchContainer, Page, ImageContainer } from './styles';

interface ISiteSearchIndex {
  siteSearchIndex: {
    index: SerialisedIndexData<never>;
  };
}

interface IPageProps {
  id: string;
  slug: string;
  title: string;
}

const Search: React.FC = () => {
  const { dark } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState<Index<never> | undefined>(
    undefined,
  );

  const handleClear = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={(data: ISiteSearchIndex) => {
        const getOrCreateIndex = (): Index<never> => {
          if (selectedIndex) return selectedIndex;

          const { index } = data.siteSearchIndex;
          return Index.load(index);
        };

        const search = (evt: React.ChangeEvent<HTMLInputElement>): void => {
          const newIndex = getOrCreateIndex();
          if (selectedIndex !== newIndex) {
            setSelectedIndex(newIndex);
          }

          setQuery(evt.target.value);
          setResults(
            newIndex
              .search(evt.target.value, {})
              .map(({ ref }: SearchResults) =>
                newIndex.documentStore.getDoc(ref),
              ),
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
              <input
                type="text"
                id="searchInput"
                value={query}
                onChange={search}
              />
              <FaTimes size={25} onClick={handleClear} />
            </SearchContainer>
            {results.map((page: IPageProps) => (
              <Page dark={dark}>
                <Link to={`/${page.slug}`}>{`${page.title}`}</Link>
              </Page>
            ))}
            <ImageContainer hide={results.length > 0}>
              <img src={noResults} alt="no-results" />
            </ImageContainer>
          </Layout>
        );
      }}
    />
  );
};

export default Search;
