import { FormEvent, useContext, useState } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../seacrh/SearchComponent';
import { PageContext } from '../../contexts/PageContext';

const HeaderComponent = () => {
  const [testError, setTestError] = useState(false);
  const { charactersPerPage, setCharactersPerPage } = useContext(PageContext);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setCharactersPerPage(event.currentTarget.value);
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
      <SearchComponent />
      <div>
        <p>Characters on page {charactersPerPage}</p>
        <input
          type="range"
          min="1"
          max="100"
          value={charactersPerPage}
          onChange={handleInputChange}
        />
      </div>
      <ErrorButton showTestError={showTestError} />
    </div>
  );
};

export default HeaderComponent;
