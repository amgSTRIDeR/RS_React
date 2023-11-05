import { Character, MainProps } from '../../shared/interfaces';
import CharacterComponent from '../character/Character.component';
import './Main.css';
import Loader from '../../UI/loader/Loader.component';
import CharactersService from '../../API/CharactersService';
import AsideService from '../../API/AsideService';
import { useSearchParams } from 'react-router-dom';
import Aside from '../aside/Aside.Component';
import { useEffect, useState } from 'react';

const Main = (props: MainProps) => {
  const [searchParams] = useSearchParams();
  const [character, setCharacter] = useState({} as Character);
  const [asideSection, setAsideSection] = useState(false);

  useEffect(() => {
    if (searchParams.has('aside') && searchParams.get('aside') === '1') {
      async function fetchData() {
        const character = await AsideService.getCharacter(
          searchParams.get('details') as string
        );
        setCharacter(character);
        setAsideSection(true);
      }
      fetchData();
    } else {
      setAsideSection(false);
    }
  }, [searchParams]);
  return (
    <div className="main">
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
          <p className="unfound-message">Characters not found</p>
        )}
      </div>
      {AsideService.isLoading ? (
        <Loader />
      ) : asideSection ? (
        <div className="aside-container">
          <Aside />
          <CharacterComponent
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            location={character.location}
            origin={character.origin}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Main;
