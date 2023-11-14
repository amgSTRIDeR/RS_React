import './DetailsComponent.css';
import { Details } from '../../shared/interfaces';
import Image from '../image/Image.component';

const DetailsComponent = (props: Details) => {
  return (
    <div className="details">
      <div>
        <Image
          className="details__image"
          src={`https://rickandmortyapi.com/api/character/avatar/${props.details.id}.jpeg`}
          alt={props.details.name}
        />
      </div>
      <div className="details__info">
        <p>
          <span className="details__text">Species</span>:&nbsp;
          {props.details.species}
        </p>
        <p>
          <span className="details__text">Origin</span>:&nbsp;
          {props.details.origin}
        </p>
        <p>
          <span className="details__text">Location</span>:&nbsp;
          {props.details.location}
        </p>
        <p>
          <span className="details__text">Status</span>:&nbsp;
          {props.details.status}
        </p>
      </div>
    </div>
  );
};

export default DetailsComponent;
