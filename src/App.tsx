import './App.css';
import React from 'react';
import Header from './components/header/Header.component';
import Main from './components/main/Main.component';
import CharactersService from './API/CharactersService';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.component';
import { AppState } from './shared/interfaces';
import ErrorPage from './components/errorPage/ErrorPage.component';

class App extends React.Component<object, AppState> {
  constructor(props: object) {
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
      <ErrorBoundary fallback={<ErrorPage />}>
        <Header
          onSearch={this.updateCharacters}
          searchFilter={this.state.searchFilter}
        />
        <Main characters={this.state.characters} />
      </ErrorBoundary>
    );
  }
}

export default App;
