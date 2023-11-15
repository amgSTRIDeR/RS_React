import HeaderComponent from '../components/header/Header.component';
import { CharactersContext } from '../contexts/CharactersContext';
import { SearchContext } from '../contexts/SearchContext';
import { PageContext } from '../contexts/PageContext';
import { useEffect, useState } from 'react';
import { Character } from '../shared/interfaces';
import { getCharacter, getCharacters } from '../API/CharactersService';
import MainComponent from '../components/main/MainComponent';
import PageControl from '../components/pageControl/PageControl';
import { DetailsContext } from '../contexts/DetailsContext';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem('searchFilter') || ''
  );
  const [charactersPerPage, setCharactersPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [isCharactersLoading, setIsCharactersLoading] = useState(false);
  const [detailsParam, setDetailsParams] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [details, setDetails] = useState({
    status: '',
    species: '',
    id: '',
    location: '',
    origin: '',
    name: '',
  });

  useEffect(() => {
    setSearchParams((prevSearchParams) => {
      const prevPage = prevSearchParams.get('page');
      if (prevPage !== currentPage.toString()) {
        prevSearchParams.set('page', `${currentPage}`);
      }

      const prevSearchFilter = prevSearchParams.get('search');
      if (prevSearchFilter !== searchFilter) {
        prevSearchParams.set('search', `${searchFilter}`);
      }

      const prevCharactersPerPage = prevSearchParams.get('perPage');
      if (prevCharactersPerPage !== charactersPerPage) {
        prevSearchParams.set('perPage', `${charactersPerPage}`);
      }

      return prevSearchParams;
    });
  }, [
    currentPage,
    searchParams,
    charactersPerPage,
    setSearchParams,
    searchFilter,
  ]);

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

  useEffect(() => {
    if (detailsParam) {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.set('details', `${detailsParam}`);
        return prevSearchParams;
      });

      setIsDetailsLoading(true);
      getCharacter(detailsParam)
        .then((character) => {
          setDetails(character);
        })
        .finally(() => {
          setIsDetailsLoading(false);
        });
    } else {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.delete('details');
        return prevSearchParams;
      });
    }
  }, [detailsParam, setSearchParams]);

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
          <PageControl
            pagesCount={pagesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className="main-container">
            <DetailsContext.Provider value={{ detailsParam, setDetailsParams }}>
              <MainComponent
                isCharactersLoading={isCharactersLoading}
                isDetailsLoading={isDetailsLoading}
                details={details}
              />
            </DetailsContext.Provider>
          </div>
        </PageContext.Provider>
      </SearchContext.Provider>
    </CharactersContext.Provider>
  );
};

export default Home;
