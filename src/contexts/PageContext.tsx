import { createContext } from 'react';

interface PageContextType {
  charactersPerPage: string;
  setCharactersPerPage: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageContext = createContext<PageContextType>({
  charactersPerPage: '',
  setCharactersPerPage: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});
