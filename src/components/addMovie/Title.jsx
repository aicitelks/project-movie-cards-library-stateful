import React from 'react';

export default class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título:
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}
