import React from 'react';
import { CharacterProps } from '../../shared/interfaces';
import './Character.css';

class CharacterComponent extends React.Component<CharacterProps> {
  constructor(props: CharacterProps) {
    super(props);
  }
  render() {
    return (
      <div className="character">
        <img
          className="character__image"
          src={this.props.image}
          alt={this.props.name}
        />
        <h2 className="character__name">{this.props.name}</h2>
        <p>
          <span className="character__text">Species</span>:&nbsp;
          {this.props.species}
        </p>

        <p>
          <span className="character__text">Origin</span>:&nbsp;
          {this.props.origin.name}
        </p>
        <p>
          <span className="character__text">Location</span>:&nbsp;
          {this.props.location.name}
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
