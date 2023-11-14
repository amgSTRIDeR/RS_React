import CharacterComponent from '../character/Character.component';
import './Main.css';
import { useContext } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';
import { MainProps } from '../../shared/interfaces';
import Loader from '../../UI/loader/Loader.component';

const MainComponent = (props: MainProps) => {
  const { characters } = useContext(CharactersContext);

  return (
    <div className="main">
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
    </div>

    //   {AsideService.isLoading ? (
    //     <Loader />
    //   ) : asideSection ? (
    //     <div className="aside-container">
    //       <Aside />
    //       <CharacterComponent
    //         key={character.id}
    //         id={character.id}
    //         name={character.name}
    //         status={character.status}
    //         species={character.species}
    //         image={character.image}
    //         location={character.location}
    //         origin={character.origin}
    //       />
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default MainComponent;
