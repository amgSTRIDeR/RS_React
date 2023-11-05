/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import { HeaderProps } from '../../shared/interfaces';
import './Header.css';
import CharactersService from '../../API/CharactersService';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Header = ({ onSearch, updateCharactersOnPage }: HeaderProps) => {
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem('searchFilter') || ''
  );
  const [tempSearchFilter, setTempSearchFilter] = useState(searchFilter);
  const [charactersPerPage, setCharactersPerPage] = useState('10');
  const [testError, setTestError] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const updateQueryParams = () => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('page', `${CharactersService.currentPage}`);
      prevSearchParams.set(
        'characters-per-page',
        `${CharactersService.charactersPerPage}`
      );
      prevSearchParams.set('search-filter', `${tempSearchFilter}`);
      return prevSearchParams;
    });
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTempSearchFilter(event.target.value);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCharactersPerPage(event.target.value);
    CharactersService.charactersPerPage = event.target.value;
    CharactersService.countPages();
    updateCharactersOnPage();
    updateQueryParams();
  };

  useEffect(() => {
    onSearch(searchFilter, charactersPerPage);
    updateQueryParams();
  }, [onSearch, searchFilter, charactersPerPage]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchFilter(tempSearchFilter);
    localStorage.setItem('searchFilter', tempSearchFilter);
    onSearch(searchFilter, charactersPerPage);
    updateQueryParams();
  };

  const showTestError = () => {
    setTestError(true);
  };

  const navigate = useNavigate();

  if (testError) {
    navigate('/error');
    throw new Error('Intentional error in the render method');
  }
  return (
    <div className="header-container">
      <form className="searchForm" onSubmit={handleSearchSubmit}>
        <input
          name="searchInput"
          className="searchInput"
          type="text"
          placeholder="wanted dead or alive"
          value={tempSearchFilter}
          onChange={handleSearchChange}
        ></input>
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <select
        className="charactersEachPage"
        name="charactersEachPage"
        id="charactersEachPage"
        defaultValue="10"
        onChange={handleSelectChange}
      >
        <option value="5">On page: 5</option>
        <option value="10">On page: 10</option>
        <option value="20">On page: 20</option>
      </select>
      <ErrorButton showTestError={showTestError} />
    </div>
  );
};

export default Header;
