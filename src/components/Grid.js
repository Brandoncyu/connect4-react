import React from 'react';
import { Row } from 'reactstrap'

const Grid = ({ number }) => {
    //This returns a colored grid. If the number passed in is "0", then it will 
    //return a white grid. If it is "1", it will return a red grid. If it is "2",
    //it will return a black grid.
    const color = ['white', 'red', 'black']
    const background = color[number]
    return (<Row>    
        <div id="square" className="square">
            <div className="grid-circle" style={{ background }}></div>
        </div>
    </Row>)
}

export default Grid;