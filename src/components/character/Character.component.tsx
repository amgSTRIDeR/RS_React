import { CharacterProps } from '../../shared/interfaces';
import './Character.css';
import Image from '../image/Image.component';
import { useSearchParams } from 'react-router-dom';

const CharacterComponent = (props: CharacterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeQueryParams = () => {
    const isAsideShown =
      searchParams.has('aside') && searchParams.get('aside') === '1';

    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('aside', `${isAsideShown ? '0' : '1'}`);
      prevSearchParams.set('details', `${props.id}`);
      return prevSearchParams;
    });
  };
  return (
    <div className="character" onClick={changeQueryParams}>
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
