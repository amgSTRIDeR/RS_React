import React from 'react';
import ErrorButton from '../errorButton/ErrorButton.component';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: this.props.searchFilter,
      testError: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchFilter !== prevProps.searchFilter) {
      this.setState({ searchFilter: this.props.searchFilter });
    }
  }

  handleSearchChange = (event) => {
    this.setState({ searchFilter: event.target.value });
  };

  handleSearchSubmit = (event) => {
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
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.searchFilter}
            onChange={this.handleSearchChange}
          ></input>
          <button type="submit">Search</button>
        </form>
        <ErrorButton showTestError={this.showTestError} />
      </div>
    );
  }
}

export default Header;
