import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import './SearchComponent.css';
import { SearchContext } from '../../contexts/SearchContext';
import { PageContext } from '../../contexts/PageContext';

function SearchComponent() {
  const { searchFilter, setSearchFilter } = useContext(SearchContext);
  const { setCurrentPage } = useContext(PageContext);
  const [currentSearchFilter, setCurrentSearchFilter] = useState(searchFilter);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurrentSearchFilter(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchFilter', currentSearchFilter);
    setCurrentPage(1);
    setSearchFilter(currentSearchFilter);
  };

  return (
    <form className="searchForm" onSubmit={handleSearchSubmit}>
      <input
        name="searchInput"
        className="searchInput"
        type="text"
        placeholder="wanted dead or alive"
        value={currentSearchFilter}
        onChange={handleSearchChange}
      ></input>
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchComponent;
