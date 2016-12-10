import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="game-reset">
        <button className="game-button game-reset-button" onClick={this.props.resetGame.bind(this)}>Reset game</button>
      </div>
    )
  }
}
