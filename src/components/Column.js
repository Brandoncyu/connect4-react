import React from 'react';
import {Col} from 'reactstrap'

const Column = ({ addToColumn, number, pieces }) => {
    let fullColumn = [...pieces]
    while (fullColumn.length < 6){
        fullColumn.push(0)
    }
    return (<Col onClick={() => addToColumn(number)}>
        {fullColumn.map((colNum) => colNum)}
    </Col>)
}

export default Column;
