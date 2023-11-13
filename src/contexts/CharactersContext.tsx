import { createContext, useContext, useState } from 'react';
import React from 'react';

interface CharactersProviderProps {
  children: React.ReactNode;
}

const CharactersContext = createContext({});
const CharactersUpdateContext = createContext({});

export function useCharacters() {
  return useContext(CharactersContext);
}

export function useCharactersUpdate() {
  return useContext(CharactersUpdateContext);
}

export function CharactersProvider({ children }: CharactersProviderProps) {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={characters}>
      <CharactersUpdateContext.Provider value={setCharacters}>
        {children}
      </CharactersUpdateContext.Provider>
    </CharactersContext.Provider>
  );
}
