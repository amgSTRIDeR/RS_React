/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useState } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import './Header.css';
import CharactersService from '../../API/CharactersService';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import SeacrhComponent from '../seacrh/SeacrhComponent';

const Header = () => {
  const [, setCharactersPerPage] = useState('10');
  const [testError, setTestError] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const updateQueryParams = () => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('page', `${CharactersService.currentPage}`);
      prevSearchParams.set(
        'characters-per-page',
        `${CharactersService.charactersPerPage}`
      );
      return prevSearchParams;
    });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCharactersPerPage(event.target.value);
    CharactersService.charactersPerPage = event.target.value;
    CharactersService.countPages();
    // updateCharactersOnPage();
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
      <SeacrhComponent />
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
