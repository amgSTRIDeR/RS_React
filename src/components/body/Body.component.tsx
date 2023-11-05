import { useState } from 'react';
import CharactersService from '../../API/CharactersService';
import BodyView from './BodyView.component';

const Body = () => {
  const [characters, setCharacters] = useState([]);

  const updateCharacters = (filter: string) => {
    CharactersService.getCharacters(filter).then((foundCharacters) => {
      setCharacters(foundCharacters);
    });
  };

  return (
    <>
      <BodyView updateCharacters={updateCharacters} characters={characters} />
    </>
  );
};

export default Body;
