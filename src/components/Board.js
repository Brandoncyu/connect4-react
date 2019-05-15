import React from 'react';
import { Row } from 'reactstrap'
import Column from './Column'

const Board = ({ board, gameOver, addToColumn }) => {
    //This renders the board using the array of arrays found in the state. It 
    //breaks that array down, first by column, then by individual grid. This algorithm breaks the larger array down to column arrays.
    return (<Row className="board" noGutters={'false'}>
        {board.map((column, value) => {
            return <Column
                key={value}
                number={value}
                pieces={column}
                gameOver={gameOver}
                addToColumn={addToColumn}
            />
        })}
    </Row>)
}

export default Board;
