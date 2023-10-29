import React from 'react';
import Character from '../character/Character';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.characters);
    return (
      <div>
        {this.props.characters.length ? (
          this.props.characters.map(({ id, name, status, species }) => (
            <Character key={id} name={name} status={status} species={species} />
          ))
        ) : (
          <p>Characters not found</p>
        )}
      </div>
    );
  }
}

export default Main;
