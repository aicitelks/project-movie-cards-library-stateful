import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const { 
      searchText, 
      onSearchTextChange, 
      bookmarkedOnly, 
      onBookmarkedChange, 
      selectedGenre, 
      onSelectedGenreChange 
    } = this.props;

    return(
      <form data-testid="search-bar-form">
        
        <label data-testid="text-input-label" htmlFor="">
          Inclui o texto:
          <input data-testid="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } />
        </label>

      </form>
    );
  }
}

