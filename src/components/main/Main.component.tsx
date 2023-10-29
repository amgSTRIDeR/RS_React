import React from 'react';
import { MainProps } from '../../shared/interfaces';
import CharacterComponent from '../character/Character.component';
import './Main.css';

class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        {this.props.characters.length ? (
          this.props.characters.map(({ id, name, status, species, image }) => (
            <CharacterComponent
              key={id}
              name={name}
              status={status}
              species={species}
              image={image}
            />
          ))
        ) : (
          <p>Characters not found</p>
        )}
      </div>
    );
  }
}

export default Main;
