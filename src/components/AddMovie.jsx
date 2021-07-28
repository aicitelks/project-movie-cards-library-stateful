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
      title: event.target.value,
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
                value={ title }
                onChange={ this.handleChange }
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}