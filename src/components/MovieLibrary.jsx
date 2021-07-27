// implement MovieLibrary component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
// import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  /*
    constructor(props) {
      super(props);
    }
 */

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
        {/*
          <MovieList movies={ this.props.movies } />
          <AddMovie />
        */}
      </div>
    );
  }
}

export default MovieLibrary;
