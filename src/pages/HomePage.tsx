import Header from '../components/header/Header.component';
import { CharactersProvider } from '../contexts/CharactersContext';
import { SearchContext } from '../contexts/SearchContext';
import { useState } from 'react';

const Home = () => {
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem('searchFilter') || ''
  );
  return (
    <CharactersProvider>
      <SearchContext.Provider value={{ searchFilter, setSearchFilter }}>
        <Header />

        {/* <Route path="/" element={<Main />}> */}
        {/* <Route path="/" element={<Characters />} />
        <Route path="characters" element={<PageControl />} /> */}
        {/* </Route> */}
      </SearchContext.Provider>
    </CharactersProvider>
  );
};

export default Home;
