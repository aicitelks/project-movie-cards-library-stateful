import React from 'react';

export default class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo:
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}
