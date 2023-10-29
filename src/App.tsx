import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CharactersService from './API/CharactersService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
      characters: [],
    };
  }

  updateCharacters = (filter: string) => {
    this.setState({ searchFilter: filter }, () => {
      CharactersService.getCharacters(filter).then((foundCharacters) =>
        this.setState({ characters: foundCharacters })
      );
    });
  };

  render() {
    return (
      <>
        <Header onSearch={this.updateCharacters} />
        <Main characters={this.state.characters} />
      </>
    );
  }
}

export default App;
