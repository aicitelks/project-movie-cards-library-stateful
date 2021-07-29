// implement MovieLibrary component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    }
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange = () => {
    this.setState({
      bookmarkedOnly: true,
    });
  }

  onSelectedGenreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre, bookmarked } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ () => {} } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle:PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
        bookmarked: PropTypes.bool.isRequired,
        genre: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieLibrary;
