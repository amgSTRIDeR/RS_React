import React from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.status}</p>
        <p>{this.props.species}</p>
      </div>
    );
  }
}

export default Character;
