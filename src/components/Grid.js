import React from 'react';
import { Container, Row, Col } from 'reactstrap'

const Grid = ({ number }) => {
    const color = ['white', 'red', 'black']
    const background = color[number]
    return (<Row>
        <div id="wrapper" class="visible-square">
            <div id="square" class="square">
                <div class="content" style={{ background }}>
                    
                </div>
            </div>
        </div>
    </Row>)
}

export default Grid;