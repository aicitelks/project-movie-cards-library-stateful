import React from 'react';

export default class Image extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem:
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}
