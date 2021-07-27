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
          <input 
            data-testid="text-input" 
            type="text" 
            value={ searchText } 
            onChange={ onSearchTextChange } 
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="">
          Mostrar somente favoritos:
          <input 
            data-testid="checkbox-input" 
            type="checkbox" 
            checked={ bookmarkedOnly } 
            onChange={ onBookmarkedChange } 
            name="" 
            id="" 
          />
        </label>

        <label data-testid="select-input-label">
          Filtrar por gênero:
          <select
            data-testid="select-input"
            value={ selectedGenre } 
            onChange={ onSelectedGenreChange }
            name="" 
            id="" 
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

