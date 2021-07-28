// implement AddMovie component here
import React from 'react';

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
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {subtitle, title, imagePath, storyline, rating, genre} = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label data-testid="title-input-label" htmlFor="input-title"> Título:
              <input
                id="input-title"
                data-testid="title-input"
                type="text"
                name="title"
                value={ title }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label data-testid="subtitle-input-label" htmlFor="input-subtitle">Subtítulo:
              <input
                id="input-subtitle"
                data-testid="subtitle-input"
                type="text"
                name="subtitle"
                value={ subtitle }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label data-testid="image-input-label" htmlFor="input-image">Imagem:
              <input
                id="input-image"
                data-testid="image-input"
                type="text"
                name="imagePath"
                value={ imagePath }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label data-testid="storyline-input-label" htmlFor="textareat-storyline">Sinopse:
            <textarea
              id="textareat-storyline"
              data-testid="storyline-input"
              name="storyline"
              cols="30"
              rows="10"
              value={ storyline }
              onChange={ this.handleChange }
            />
            </label>
          </div>
          <div>
            <label data-testid="rating-input-label" htmlFor="input-rating">Avaliação:
              <input
                id="input-rating"
                data-testid="rating-input"
                type="number"
                name="rating"
                value={ rating }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label data-testid="genre-input-label" htmlFor="select-genre">Gênero:
              <select
                id="select-genre"
                data-testid="genre-input"
                name="genre"
                value={ genre }
                onChange={ this.handleChange }
              >
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}