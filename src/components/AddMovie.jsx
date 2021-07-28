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
  }
  
  render() {
    const INITIAL_STATE = this.state;

    return (
      <div>
        <form data-testid="add-movie-form"></form>
      </div>
    );
  }
}