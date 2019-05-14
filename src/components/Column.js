import React from 'react';

const Column = ({ setTurn, number}) => {
    return (<div onClick={() => setTurn(number)}>
        {number}
    </div>)
}

export default Column;
