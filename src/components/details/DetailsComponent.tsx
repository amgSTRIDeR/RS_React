import './DetailsComponent.css';
import { Details } from '../../shared/interfaces';

const DetailsComponent = (props: Details) => {
  return (
    <div className="details">
      <div>
        <img
          className="details__image"
          src={`https://rickandmortyapi.com/api/character/avatar/${
            props.details.id || 1
          }.jpeg`}
          alt={props.details.name}
        />
      </div>
      <div className="details__info">
        <p>
          <span className="details__text">Species</span>
          <span>: </span>
          {props.details.species}
        </p>
        <p>
          <span className="details__text">Origin</span>
          <span>: </span>
          {props.details.origin}
        </p>
        <p>
          <span className="details__text">Location</span>
          <span>: </span>
          {props.details.location}
        </p>
        <p>
          <span className="details__text">Status</span>
          <span>: </span>
          {props.details.status}
        </p>
      </div>
    </div>
  );
};

export default DetailsComponent;
