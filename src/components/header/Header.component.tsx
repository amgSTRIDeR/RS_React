import { ChangeEvent, FormEvent, useState } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import { HeaderProps } from '../../shared/interfaces';
import './Header.css';

const Header = (props: HeaderProps) => {
  const [searchFilter, setSearchFilter] = useState(props.searchFilter);
  const [testError, setTestError] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearch(searchFilter);
  };

  const showTestError = () => {
    setTestError(true);
  };

  if (testError) {
    throw new Error('Intentional error in the render method');
  }
  return (
    <div>
      <ErrorButton showTestError={showTestError} />
      <form className="searchForm" onSubmit={handleSearchSubmit}>
        <input
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
    </div>
  );
};

export default Header;
