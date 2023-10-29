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

  componentDidMount() {
    const localSearchFilter = localStorage.getItem('searchFilter');
    if (localSearchFilter) {
      this.updateCharacters(localSearchFilter);
    } else {
      this.updateCharacters('');
    }
  }

  updateCharacters = (filter: string) => {
    localStorage.setItem('searchFilter', filter);
    this.setState({ searchFilter: filter }, () => {
      CharactersService.getCharacters(filter).then((foundCharacters) =>
        this.setState({ characters: foundCharacters })
      );
    });
  };

  render() {
    return (
      <>
        <Header
          onSearch={this.updateCharacters}
          searchFilter={this.state.searchFilter}
        />
        <Main characters={this.state.characters} />
      </>
    );
  }
}

export default App;
