import { createContext } from 'react';
import { Character } from '../shared/interfaces';

interface CharactersContextType {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const CharactersContext = createContext<CharactersContextType>({
  characters: [],
  setCharacters: () => {},
});
