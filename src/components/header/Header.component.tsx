/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import { HeaderProps } from '../../shared/interfaces';
import './Header.css';

const Header = ({ onSearch }: HeaderProps) => {
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem('searchFilter') || ''
  );
  const [testError, setTestError] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  useEffect(() => {
    onSearch(searchFilter);
  }, []);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchFilter', searchFilter);
    onSearch(searchFilter);
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
