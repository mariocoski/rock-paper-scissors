import React from 'react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    let games = this.props.games.map((game, i)=>{
      return (
        <tr key={i}>
          <td>{game.user}</td>
          <td>{game.computer}</td>
          <td>{this.props.results[game.result]}</td>
        </tr>
      )
    }).reverse();

    return (
     <div className="game-history">
     	<h3>History of results</h3>
     	<table className="table table-bordered table-striped">
     	  <thead>
     	  	<tr>
     	  	  <td>User Input</td>
     	  	  <td>Computer Input</td>
     	  	  <td>Result</td>
     	  	</tr>
     	  </thead>
     	  <tbody>
     	  	  {games}
     	  </tbody>
     	</table>

     </div>
    )
  }
}
