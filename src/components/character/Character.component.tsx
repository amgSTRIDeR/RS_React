import { CharacterProps } from '../../shared/interfaces';
import './Character.css';
import Image from '../image/Image.component';
import { useContext } from 'react';
import { DetailsContext } from '../../contexts/DetailsContext';

const CharacterComponent = (props: CharacterProps) => {
  const { setDetailsParams } = useContext(DetailsContext);

  const addDetails = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setDetailsParams(props.id);
  };

  return (
    <div className="character" onClick={(event) => addDetails(event)}>
      <Image
        className="character__image"
        src={`https://rickandmortyapi.com/api/character/avatar/${props.id}.jpeg`}
        alt={props.name}
      />
      <h2 className="character__name">{props.name}</h2>
    </div>
  );
};

export default CharacterComponent;
