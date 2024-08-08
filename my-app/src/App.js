import './App.css';
import { useState } from 'react';
import {calculateWinner} from './calculate';
import AppLayout from './components/AppLayout';

export const App = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [next, setNext] = useState(true);
    const [draw, setDraw] = useState(0);

    const winner = calculateWinner(board);

    //Клик на ячейке
    const handleClick = (index) => {
        const boardCopy = [...board];

        //Определить был ли клик по ячейке или игра закончена
        if(winner || boardCopy[index]){
            return;
        }

        //Определить чей ход Х или О
        boardCopy[index] = next ? 'X' : 'O';

        setDraw((draw) => draw + 1);

        //Обновить наши состояния
        setBoard(boardCopy);
        setNext(!next);
    }

	return <AppLayout board={board} next={next} draw={draw} setBoard={setBoard} setNext={setNext} setDraw={setDraw}
            winner={winner} handleClick={handleClick} />;
}
