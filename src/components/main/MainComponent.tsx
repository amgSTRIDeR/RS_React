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

  return (
    <div className="main" onClick={hideDetails}>
      {props.isCharactersLoading ? (
        <Loader />
      ) : (
        <div className="characters">
          {characters.length ? (
            characters.map(({ id, name }) => (
              <CharacterComponent key={id} id={id} name={name} />
            ))
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
