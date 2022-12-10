import React, {useState} from 'react';

import Board from '../Board';
import {calculateWinner} from '../../helper';
import "./Game.css"

const Game = () => {

const[board, setBoard] = useState(Array(9).fill(null))
const [xIsNext, setXIsNext] = useState(true)
const winner = calculateWinner(board)

const handleClick = (index)=>{
	const boardCopy = [...board]

	if(winner || boardCopy[index]) return

	boardCopy[index] = xIsNext ? "X" : "O"

	setBoard(boardCopy)
	setXIsNext(!xIsNext)


}

const startNewGame = ()=>{
	return(
		<button className='start__btn' onClick={()=> setBoard(Array(9).fill(null))}>Clean out your desk</button>
	)
}

	return (
		<div className='wrapper'>
			<p className='game__info'>
				{winner ? "Winner " + winner : "The next player " + (xIsNext ? "X" : "O")}
			</p>
			<Board squares={board} click={handleClick}/>
			{startNewGame()}
		</div>
	);
}

export default Game;
