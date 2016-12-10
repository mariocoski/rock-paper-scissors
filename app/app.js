import React from 'react';
import ReactDOM from 'react-dom';
import History from './History.js';
import PlayButtons from './PlayButtons.js';
import Reset from './Reset.js';
import Scores from './Scores.js';

class App extends React.Component {
  
  constructor() {
    super()

    this.choices = ["rock","paper","scissors"];
    this.results = ["won", "draw", "lost"];

    this.randomChoice = this.randomChoice.bind(this);
    this.choose = this.choose.bind(this);
    this.resolveResult = this.resolveResult.bind(this);
    this.isADraw = this.isADraw.bind(this);
    this.areYouAWinner = this.areYouAWinner.bind(this);
    this.isGameFinished = this.isGameFinished.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.showResult = this.showResult.bind(this);
    this.areTheLastThreeConsecutiveMatchesTheSameAndNotEqualsDraw = this.areTheLastThreeConsecutiveMatchesTheSameAndNotEqualsDraw.bind(this);
    
    //setting initial state
    this.state = {
      computerChoice: this.randomChoice(),
      games: []
    };
  }

  isGameFinished(){
    if(this.state.games.length < 3) return false;

    let allGames = this.state.games;
    let check = false;
    allGames.forEach((game,index) => {
      if(this.areTheLastThreeConsecutiveMatchesTheSameAndNotEqualsDraw(game, index)){ 
       check = true;
      }
    });
    return check;
  }

  areTheLastThreeConsecutiveMatchesTheSameAndNotEqualsDraw(currentGame, currentIndex){
    let previous = this.state.games[currentIndex-1];
      let oneBeforePrevious = this.state.games[currentIndex-2];
  
      if(!previous || !oneBeforePrevious){
        return false;
      }  
  
      if((previous.result === oneBeforePrevious.result) && (oneBeforePrevious.result === currentGame.result) && currentGame.result !== 1){
            return true;
      }
      return false;  
  }

  randomChoice(){
    let randomNumberFromZeroToTwo = Math.floor(Math.random() * 3);
    return this.choices[randomNumberFromZeroToTwo];
  }

  resetGame(){
     this.setState({
        computerChoice: this.randomChoice(),
        games: []
      });
  }

  choose(option){
     let game = {
        user: option,
        computer: this.state.computerChoice,
        result : this.resolveResult(option),
     };

    let games = this.state.games;
    games.push(game);

    this.setState({
      games,
      computerChoice: this.randomChoice()
    });

    if(this.isGameFinished()) {
      this.showResult();
      this.resetGame();
    }  
  }

  showResult(){
    let games = this.state.games;
    let lastItem = games[games.length-1];
    if(lastItem.result === 0){
      alert("You have won!");
    }else{
      alert("Computer has won!");
    }
  }

  resolveResult(option){
    if(this.isADraw(option)){
      return 1; //draw
    }else if(this.areYouAWinner(option)){
      return 0; //won
    }
    return 2; //lost
  }

  isADraw(option){
    return option === this.state.computerChoice;
  }

  areYouAWinner(option){
    return (
              (this.state.computerChoice === "rock" && option === "paper") 
           || (this.state.computerChoice === "paper" && option === "scissors") 
           || (this.state.computerChoice === "scissors" && option === "rock") 
           );
  }

  render() {
    return (
      <div>
        <Reset state={this.state} resetGame={this.resetGame} />
      	
        <Scores games={this.state.games} results={this.results} />

      	<PlayButtons choose={this.choose} />
     
      	<History games={this.state.games} results={this.results} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
