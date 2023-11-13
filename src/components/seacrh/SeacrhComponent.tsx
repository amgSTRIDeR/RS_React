import { ChangeEvent, FormEvent, useContext } from 'react';
import './SearchComponent.css';
import { SearchContext } from '../../contexts/SearchContext';

function SeacrhComponent() {
  const { searchFilter, setSearchFilter } = useContext(SearchContext);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchFilter(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="searchForm" onSubmit={handleSearchSubmit}>
      <input
        name="searchInput"
        className="searchInput"
        type="text"
        placeholder="wanted dead or alive"
        value={searchFilter}
        onChange={handleSearchChange}
      ></input>
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
}

export default SeacrhComponent;
