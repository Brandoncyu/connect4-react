import React from 'react';
import {Container, Col} from 'reactstrap'
import Grid from './Grid'

const Column = ({ addToColumn, number, pieces }) => {
    //In order for this to work, each column array must have exactly six 
    //variables. We are making a copy of the column array below, so that we do 
    //not affect the original one in the state. Since each array already has 
    //the variables "1" or "2" (as integers), we are adding "0"'s until it hits 
    //a length of six. We then reverse as the grid occupies from top down, and 
    //the pushed in pieces should be on the bottom
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
