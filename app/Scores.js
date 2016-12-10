import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
    this.info = "";
    this.infoClass = "";
  }

  componentWillUpdate(nextProps, nextState){
    if(this.props.games.length){
      let lastGame = this.props.games[this.props.games.length-1];
      if(lastGame.result === 0){
        this.info = 'You Won: '+ lastGame.user + ' beat ' + lastGame.computer + '!';
        this.infoClass = 'success';
      }else if(lastGame.result === 1){
        this.info = "It's a draw! Try again!";
        this.infoClass = 'draw';
      }else{  
        this.info = 'You Lost: '+ lastGame.computer + ' beat ' + lastGame.user + '!';
        this.infoClass = 'failure';
      }
    }else{
      this.info = "";
      this.infoClass = "";
    }
  }

  render() {
    return (
      <div className="game-scores">
          <h4><span className={this.infoClass}> {this.info}</span></h4>
      </div>
    )
  }
}
