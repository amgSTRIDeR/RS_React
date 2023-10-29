import React from 'react';
import { CharacterProps } from '../../shared/interfaces';

class CharacterComponent extends React.Component<CharacterProps> {
  constructor(props: CharacterProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.name} />
        <h2>{this.props.name}</h2>
        <p>Species: {this.props.species}</p>
        <p>Origin: {this.props.origin.name}</p>
        <p>Location: {this.props.location.name}</p>
        <p>Status: {this.props.status}</p>
      </div>
    );
  }
}

export default CharacterComponent;
