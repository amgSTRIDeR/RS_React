/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import { HeaderProps } from '../../shared/interfaces';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import CharactersService from '../../API/CharactersService';

const Header = ({ onSearch, updateCharactersOnPage }: HeaderProps) => {
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem('searchFilter') || ''
  );
  const [charactersPerPage, setCharactersPerPage] = useState('10');
  const [testError, setTestError] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCharactersPerPage(event.target.value);
    CharactersService.charactersPerPage = event.target.value;
    CharactersService.countPages();
    updateCharactersOnPage();
  };

  useEffect(() => {
    onSearch(searchFilter, charactersPerPage);
  }, []);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchFilter', searchFilter);
    onSearch(searchFilter, charactersPerPage);
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
        <select
          name="charactersEachPage"
          id="charactersEachPage"
          defaultValue="10"
          onChange={handleSelectChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </form>
    </div>
  );
};

export default Header;
