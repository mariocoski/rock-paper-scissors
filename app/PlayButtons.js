import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="game-play-buttons">
        <div className="game-button-item">
          <button className="game-button game-play-button rock-button" onClick={this.props.choose.bind(this, 'rock')}>
            <span><img className="img-responsive img-mini" src={'rock.png'} /></span> 
            <span>Rock</span>
          </button>
        </div>
        <div className="game-button-item">
          <button className="game-button game-play-button paper-button" onClick={this.props.choose.bind(this, 'paper')}>
            <span><img className="img-responsive img-mini" src={'paper.png'} /></span>
            <span>Paper</span>
          </button>
        </div>
        <div className="game-button-item">
          <button className="game-button game-play-button scissors-button" onClick={this.props.choose.bind(this, 'scissors')}>
            <span><img className="img-responsive img-mini" src={'scissors.png'} /></span>
            <span>Scissors</span>
          </button>
        </div>
      </div>
    )
  }
}
