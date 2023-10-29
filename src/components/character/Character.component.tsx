import React from 'react';
import { CharacterProps } from '../../shared/interfaces';

class CharacterComponent extends React.Component<CharacterProps> {
  constructor(props: CharacterProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.status}</p>
        <p>{this.props.species}</p>
        <img src={this.props.image} alt={this.props.name} />
      </div>
    );
  }
}

export default CharacterComponent;
