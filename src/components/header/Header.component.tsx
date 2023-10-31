import React, { ChangeEvent, FormEvent } from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';
import { HeaderProps, HeaderState } from '../../shared/interfaces';
import './Header.css';

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      searchFilter: this.props.searchFilter,
      testError: false,
    };
  }

  componentDidUpdate(prevProps: HeaderProps) {
    if (this.props.searchFilter !== prevProps.searchFilter) {
      this.setState({ searchFilter: this.props.searchFilter });
    }
  }

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchFilter: event.target.value });
  };

  handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchFilter);
  };

  showTestError = () => {
    this.setState({ testError: true });
  };

  render() {
    {
      if (this.state.testError) {
        throw new Error('Intentional error in the render method');
      }
    }
    return (
      <div>
        <ErrorButton showTestError={this.showTestError} />
        <form className="searchForm" onSubmit={this.handleSearchSubmit}>
          <input
            className="searchInput"
            type="text"
            placeholder="wanted dead or alive"
            value={this.state.searchFilter}
            onChange={this.handleSearchChange}
          ></input>
          <button className="searchButton" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
