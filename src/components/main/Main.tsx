import React from 'react';
import Character from '../character/Character';
import CharactersService from '../../API/CharactersService';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const characters = await CharactersService.getCharacters('');
    this.setState(characters);
  }

  render() {
    const data = Object.values(this.state);
    return (
      <div>
        {data.length ? (
          data.map(({ id, name, status, species }) => (
            <Character key={id} name={name} status={status} species={species} />
          ))
        ) : (
          <p>sdfserf</p>
        )}
      </div>
    );
  }
}

export default Main;
