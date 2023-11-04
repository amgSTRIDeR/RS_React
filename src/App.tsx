import './App.css';
import Header from './components/header/Header.component';
import Main from './components/main/Main.component';
import CharactersService from './API/CharactersService';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.component';
import ErrorPage from './components/errorPage/ErrorPage.component';
import { useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const updateCharacters = (filter: string) => {
    CharactersService.getCharacters(filter).then((foundCharacters) => {
      setCharacters(foundCharacters);
    });
  };

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Header onSearch={updateCharacters} />
      <Main characters={characters} />
    </ErrorBoundary>
  );
};

export default App;
