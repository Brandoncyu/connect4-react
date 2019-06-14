import React from 'react';
import { Row } from 'reactstrap'
import Column from './Column'

const Board = ({ board, gameOver, addToColumn, player }) => {
    return (<Row id="board" noGutters={'false'}>
        {board.map((column, value) => {
            return <Column
                key={value}
                number={value}
                pieces={column}
                gameOver={gameOver}
                addToColumn={addToColumn}
                player={player}
            />
        })}
    </Row>)
}

export default Board;
