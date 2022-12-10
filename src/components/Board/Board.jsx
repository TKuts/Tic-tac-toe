import React from 'react';

import Square from '../Square';

import "./Board.css"

const Board = ({squares, click}) => {
	return (
		<div className='board'>
			{squares.map((el, i)=>(<Square key={i} value={el} onClick={()=> click(i)} />)
			
			)}
			
		</div>
	);
}

export default Board;


