import React, { useState } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { Index, SerialisedIndexData, SearchResults } from 'elasticlunr';
import { FaTimes } from 'react-icons/fa';

import Layout from '../Layout';
import { useTheme } from '../../hooks/theme';
import { SearchContainer } from './styles';
import SEO from '../SEO';

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
              <FaTimes size={25} onClick={() => setQuery('')} />
            </SearchContainer>
            {results.map((page: IPageProps) => (
              <li key={page.id}>
                <Link to={`/${page.slug}`}>{`${page.title}`}</Link>
              </li>
            ))}
          </Layout>
        );
      }}
    />
  );
};

export default Search;
