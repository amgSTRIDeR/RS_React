import React from 'react';
import { CharacterProps } from '../../shared/interfaces';
import './Character.css';
import Image from '../image/Image.component';

class CharacterComponent extends React.Component<CharacterProps> {
  constructor(props: CharacterProps) {
    super(props);
  }
  render() {
    return (
      <div className="character">
        <Image
          className="character__image"
          src={`https://rickandmortyapi.com/api/character/avatar/${this.props.id}.jpeg`}
          alt={this.props.name}
        />
        <h2 className="character__name">{this.props.name}</h2>
        <p>
          <span className="character__text">Species</span>:&nbsp;
          {this.props.species}
        </p>

        <p>
          <span className="character__text">Origin</span>:&nbsp;
          {this.props.origin}
        </p>
        <p>
          <span className="character__text">Location</span>:&nbsp;
          {this.props.location}
        </p>
        <p>
          <span className="character__text">Status</span>:&nbsp;
          {this.props.status}
        </p>
      </div>
    );
  }
}

export default CharacterComponent;
