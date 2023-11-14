import { createContext } from 'react';

interface DetailsContextType {
  detailsParam: number;
  setDetailsParams: React.Dispatch<React.SetStateAction<number>>;
}

export const DetailsContext = createContext<DetailsContextType>({
  detailsParam: 0,
  setDetailsParams: () => {},
});
