import { useCallback, useState } from 'react';
import CharactersService from '../../API/CharactersService';
import BodyView from './BodyView.component';

const Body = () => {
  const [characters, setCharacters] = useState([]);

  const updateCharacters = useCallback(
    (searchFilter: string, charactersPerPage: string) => {
      CharactersService.getCharacters(searchFilter, charactersPerPage).then(
        (foundCharacters) => {
          setCharacters(foundCharacters);
        }
      );
    },
    []
  );

  const updateCharactersOnPage = (pageNumber: string | undefined) => {
    if (pageNumber) {
      CharactersService.currentPage = pageNumber;
    }
    CharactersService.getCharactersOnPage(pageNumber).then(
      (foundCharacters) => {
        setCharacters(foundCharacters);
      }
    );
  };

  return (
    <>
      <BodyView
        updateCharacters={updateCharacters}
        updateCharactersOnPage={updateCharactersOnPage}
        characters={characters}
      />
    </>
  );
};

export default Body;
