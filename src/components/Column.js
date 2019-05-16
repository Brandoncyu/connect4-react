import React from 'react';
import {Container, Col} from 'reactstrap'
import Grid from './Grid'

const Column = ({ addToColumn, number, pieces }) => {
    let fullColumn = [...pieces]
    while (fullColumn.length < 6){
        fullColumn.push(0)
    }
    let fullColumnReverse = fullColumn.reverse()
    return (<Col onClick={() => addToColumn(number)}>
        <Container>
            {fullColumnReverse.map((colNum, index) => <Grid key={index} number={colNum} />)}
        </Container>
    </Col>)
}

export default Column;
