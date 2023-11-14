import CharacterComponent from '../character/Character.component';
import './Main.css';
import { useContext, useEffect, useState } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';
import { MainProps } from '../../shared/interfaces';
import Loader from '../../UI/loader/Loader.component';
import { useSearchParams } from 'react-router-dom';
import { DetailsContext } from '../../contexts/DetailsContext';
import { getCharacter } from '../../API/CharactersService';
import DetailsComponent from '../details/DetailsComponent';

const MainComponent = (props: MainProps) => {
  const { characters } = useContext(CharactersContext);
  const { detailsParam, setDetailsParams } = useContext(DetailsContext);
  const [, setSearchParams] = useSearchParams();
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [details, setDetails] = useState({
    status: '',
    species: '',
    id: '',
    location: '',
    origin: '',
    name: '',
  });

  const hideDetails = () => {
    setDetailsParams(0);
  };

  useEffect(() => {
    if (detailsParam) {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.set('details', `${detailsParam}`);
        return prevSearchParams;
      });
    } else {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.delete('details');
        return prevSearchParams;
      });
    }
  }, [detailsParam, setSearchParams]);

  useEffect(() => {
    if (detailsParam) {
      setIsDetailsLoading(true);
      getCharacter(detailsParam)
        .then((character) => {
          setDetails(character);
        })
        .finally(() => {
          setIsDetailsLoading(false);
        });
    }
  }, [detailsParam]);

  return (
    <div className="main" onClick={hideDetails}>
      {props.isCharactersLoading ? (
        <Loader />
      ) : (
        <div className="characters">
          {characters.length ? (
            characters.map(
              ({ id, name, status, species, image, location, origin }) => (
                <CharacterComponent
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  image={image}
                  location={location}
                  origin={origin}
                />
              )
            )
          ) : (
            <p className="unfound-message">Characters not found</p>
          )}
        </div>
      )}

      {isDetailsLoading ? (
        <Loader />
      ) : detailsParam ? (
        <DetailsComponent details={details} />
      ) : null}
    </div>
  );
};

export default MainComponent;
