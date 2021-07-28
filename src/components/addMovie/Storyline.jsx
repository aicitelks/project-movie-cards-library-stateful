import React from 'react';

export default class Storyline extends React.Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse:
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}
