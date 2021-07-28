import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação:
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}
