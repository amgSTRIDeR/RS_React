import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchFilter: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchFilter);
  };

  render() {
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
      </div>
    );
  }
}

export default Header;
