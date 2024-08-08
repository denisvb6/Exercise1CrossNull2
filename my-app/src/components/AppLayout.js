import Board from './Board';
import PropTypes from 'prop-types';
// import AppLayout from './App'

export default function AppLayout({board, next, draw, setBoard, setNext, setDraw, winner, handleClick}) {
	return	(
		<div className="wrapper">
			<p className='info'>
				{ (draw === 9) ? 'Ничья' : '' }
			</p>
			<p className='info'>
				{ winner && (draw !== 9) ? 'Победитель: ' + winner : 'Ход: ' + (next ? 'X' : 'O') }
			</p>
			<Board squares={board} onClick={handleClick}/>
			{ <button className='start_btn' onClick={() => (setBoard(Array(9).fill(null)) + setNext(true) + setDraw(0))}>Начать заново</button> }
		</div>
	);
}

AppLayout.propTypes = {
	board: PropTypes.array,
	next: PropTypes.bool,
	draw: PropTypes.number,
	setBoard: PropTypes.func,
	setNext: PropTypes.func,
	setDraw: PropTypes.func,
	winner: PropTypes.array,
	handleClick: PropTypes.func
};
