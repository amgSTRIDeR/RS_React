import { MainProps } from '../../shared/interfaces';
import CharacterComponent from '../character/Character.component';
import './Main.css';
import Loader from '../../UI/loader/Loader.component';
import CharactersService from '../../API/CharactersService';

const Main = (props: MainProps) => {
  return (
    <div className="characters">
      {CharactersService.isLoading ? (
        <Loader />
      ) : props.characters.length ? (
        props.characters.map(
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
        <p>Characters not found</p>
      )}
    </div>
  );
};

export default Main;
