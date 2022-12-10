import Game from "./components/Game";

import "./style/Reset.css";

function Add() {
  return <Game />;
}

export default Add;
// import { React, Component } from "react";

// import "./style/App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       count: 0,
//     };
//     this.winnerLine = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [2, 4, 6],
//       [0, 4, 8],
//     ];
//   }

//   isWinner = () => {
//     let activElement = this.state.count % 2 === 0 ? "X" : "O";
//     for (let i = 0; i < this.winnerLine.length; i++) {
//       let line = this.winnerLine[i];
//       if (
//         this.state.squares[line[0]] === activElement &&
//         this.state.squares[line[1]] === activElement &&
//         this.state.squares[line[2]] === activElement
//       ) {
//         alert(activElement + " win");
//       }
//     }
//   };

//   clickHandler = (event) => {
//     let data = event.target.getAttribute("data");
//     let currentSquares = this.state.squares;

//     if (currentSquares[data] === null) {
//       currentSquares[data] = this.state.count % 2 === 0 ? "X" : "O";
//       this.setState({ count: this.state.count + 1 });
//       this.setState({ squares: currentSquares });
//     } else alert("Sorry");

//     this.isWinner();
//     this.turn();
//   };

//   render() {

//   }
// }
// export default App;
