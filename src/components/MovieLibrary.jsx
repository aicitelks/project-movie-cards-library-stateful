// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    // o estado é assíncrono
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  onSearchTextChange = (event) => {
    const { movies } = this.state;
    const {movies: allMovies } = this.props;
    const searchFilterText = event.target.value;
    let moviesFiltereds =[];

    if(searchFilterText !== '') {
      moviesFiltereds = movies.filter((movie) => (
          movie.title.includes(searchFilterText) ||
          movie.subtitle.includes(searchFilterText) ||
          movie.storyline.includes(searchFilterText)
      ));
    } else moviesFiltereds = allMovies;

    this.setState({
      searchText: searchFilterText,
      movies: moviesFiltereds,
    });
  }

  // Desestruturando o parâmetro: event é o mesmo que "const checkboxStatus = event.target.checked;"
  onBookmarkedChange = ({ target: { checked: checkboxStatus } }) => {
    const { bookmarkedOnly, movies } = this.state;
    // nomeando 'movies' de 'allMovies'
    const { movies: allMovies } = this.props;
    let moviesFiltereds = [];

    if(checkboxStatus === true) {
      moviesFiltereds = movies.filter((movie) => movie.bookmarked === true);
    } else {
      moviesFiltereds = allMovies;
    }

    // atualizar a chave movies do estado com o novo array
    this.setState({
      bookmarkedOnly: !bookmarkedOnly,
      movies: moviesFiltereds,
    });
  }

  // Desestruturando o parâmetro: event > é o mesmo que 'const newGenre = event.target.value;'
  onSelectedGenreChange = ({ target: { value: newGenre } }) => {
    const { movies } = this.state;
    let moviesFiltereds = movies;

    if(newGenre !== '') {
      moviesFiltereds = movies.filter((movie) => movie.genre === newGenre);
    }

    this.setState({
      selectedGenre: newGenre,
      movies: moviesFiltereds,
    });
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre, bookmarked } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // const { movies } = this.props;

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
        subtitle: PropTypes.string.isRequired,
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
