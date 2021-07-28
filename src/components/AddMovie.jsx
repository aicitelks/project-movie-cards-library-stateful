// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import Title from './addMovie/Title';
import Subtitle from './addMovie/Subtitle';
import Image from './addMovie/Image';
import Storyline from './addMovie/Storyline';
import Rating from './addMovie/Rating';
import Genre from './addMovie/Genre';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addMovie(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <Image imagePath={ imagePath } onChange={ this.handleChange } />
        <Storyline storyline={ storyline } onChange={ this.handleChange } />
        <Rating rating={ rating } onChange={ this.handleChange } />
        <Genre genre={ genre } onChange={ this.handleChange } />

        <button data-testid="send-button" type="button" onClick={ this.addMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
