import { createContext } from 'react';
interface SearchContextType {
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({
  searchFilter: '',
  setSearchFilter: () => {},
});
