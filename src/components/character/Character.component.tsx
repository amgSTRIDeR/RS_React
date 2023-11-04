import { CharacterProps } from '../../shared/interfaces';
import './Character.css';
import Image from '../image/Image.component';

const CharacterComponent = (props: CharacterProps) => {
  return (
    <div className="character">
      <Image
        className="character__image"
        src={`https://rickandmortyapi.com/api/character/avatar/${props.id}.jpeg`}
        alt={props.name}
      />
      <h2 className="character__name">{props.name}</h2>
      <p>
        <span className="character__text">Species</span>:&nbsp;
        {props.species}
      </p>

      <p>
        <span className="character__text">Origin</span>:&nbsp;
        {props.origin}
      </p>
      <p>
        <span className="character__text">Location</span>:&nbsp;
        {props.location}
      </p>
      <p>
        <span className="character__text">Status</span>:&nbsp;
        {props.status}
      </p>
    </div>
  );
};

export default CharacterComponent;
