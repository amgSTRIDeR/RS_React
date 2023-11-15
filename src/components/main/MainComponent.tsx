import CharacterComponent from '../character/CharacterComponent';
import './Main.css';
import { useContext } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';
import { MainProps } from '../../shared/interfaces';
import Loader from '../../UI/loader/Loader.component';
import { DetailsContext } from '../../contexts/DetailsContext';
import DetailsComponent from '../details/DetailsComponent';

const MainComponent = (props: MainProps) => {
  const { characters } = useContext(CharactersContext);
  const { detailsParam, setDetailsParams } = useContext(DetailsContext);

  const hideDetails = () => {
    setDetailsParams(0);
  };

  // useEffect(() => {
  //   if (detailsParam) {
  //     setSearchParams((prevSearchParams) => {
  //       prevSearchParams.set('details', `${detailsParam}`);
  //       return prevSearchParams;
  //     });

  //     setIsDetailsLoading(true);
  //     getCharacter(detailsParam)
  //       .then((character) => {
  //         setDetails(character);
  //       })
  //       .finally(() => {
  //         setIsDetailsLoading(false);
  //       });
  //   } else {
  //     setSearchParams((prevSearchParams) => {
  //       prevSearchParams.delete('details');
  //       return prevSearchParams;
  //     });
  //   }
  // }, [detailsParam, props.setSearchParams]);

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

      {props.isDetailsLoading ? (
        <Loader />
      ) : detailsParam ? (
        <DetailsComponent details={props.details} />
      ) : null}
    </div>
  );
};

export default MainComponent;
