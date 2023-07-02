import React from 'react';
import { SearchBarHeader } from './SearchBar.styled';
import PropTypes from 'prop-types';


export class SearchBar extends React.PureComponent  {
 handleSubmit = event => {
    event.preventDefault();
    const input = event.target.elements.searchInput.value;
    this.props.onSubmit(input);
  };

  render() {
  return (
    <>
      <SearchBarHeader>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className="SearchForm-button"
          >
            <span className="button-label">🔍</span>
          </button>

          <input
            id="searchInput"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchBarHeader>
    </>
  );
}
  
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};