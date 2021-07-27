import React from 'react';

import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputPesquisa">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            id="inputPesquisa"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="inputFavoritos">
          Mostrar somente favoritos:
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="inputFavoritos"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="inputSelect">
          Filtrar por gênero:
          <select data-testid="select-input" 
            value={ selectedGenre } 
            onChange={ onSelectedGenreChange }
            id="inputSelect"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
