import React from 'react';
import { Row } from 'reactstrap'

const Grid = ({ number }) => {
    const color = ['white', 'red', 'black']
    const background = color[number]
    return (<Row>    
        <div className="square">
            <div className="grid-circle" style={{ background }}></div>
        </div>
    </Row>)
}

export default Grid;