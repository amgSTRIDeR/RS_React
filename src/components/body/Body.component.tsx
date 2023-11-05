import { useState } from 'react';
import CharactersService from '../../API/CharactersService';
import BodyView from './BodyView.component';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from '../errorPage/ErrorPage.component';

const Body = () => {
  const [characters, setCharacters] = useState([]);

  const updateCharacters = (filter: string) => {
    CharactersService.getCharacters(filter).then((foundCharacters) => {
      setCharacters(foundCharacters);
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={
            <BodyView
              updateCharacters={updateCharacters}
              characters={characters}
            />
          }
        />
        <Route
          path="error"
          element={<ErrorPage header="(Some error on the page)" />}
        />
        <Route path="*" element={<ErrorPage header="(Wrong path)" />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Body;
