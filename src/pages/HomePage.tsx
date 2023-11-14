import HeaderComponent from '../components/header/Header.component';
import { CharactersContext } from '../contexts/CharactersContext';
import { SearchContext } from '../contexts/SearchContext';
import { PageContext } from '../contexts/PageContext';
import { useEffect, useState } from 'react';
import { Character } from '../shared/interfaces';
import { getCharacters } from '../API/CharactersService';
import MainComponent from '../components/main/MainComponent';
import PageControl from '../components/pageControl/PageControl';

const Home = () => {
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem('searchFilter') || ''
  );
  const [charactersPerPage, setCharactersPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [isCharactersLoading, setIsCharactersLoading] = useState(false);

  // const updateQueryParams = () => {
  //   setSearchParams((prevSearchParams) => {
  //     prevSearchParams.set('page', `${CharactersService.currentPage}`);
  //     return prevSearchParams;
  //   });
  // };
  useEffect(() => {
    setIsCharactersLoading(true);
    getCharacters(searchFilter, charactersPerPage, currentPage)
      .then(({ characters, pagesCount }) => {
        setCharacters(characters);
        setPagesCount(pagesCount);
      })
      .finally(() => {
        setIsCharactersLoading(false);
      });

    if (currentPage > pagesCount) {
      setCurrentPage(pagesCount);
    }
  }, [searchFilter, charactersPerPage, currentPage, pagesCount]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      <SearchContext.Provider value={{ searchFilter, setSearchFilter }}>
        <PageContext.Provider
          value={{
            charactersPerPage,
            setCharactersPerPage,
            currentPage,
            setCurrentPage,
          }}
        >
          <HeaderComponent />
          <MainComponent isCharactersLoading={isCharactersLoading} />
          <PageControl
            pagesCount={pagesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </PageContext.Provider>
      </SearchContext.Provider>
    </CharactersContext.Provider>
  );
};

export default Home;
