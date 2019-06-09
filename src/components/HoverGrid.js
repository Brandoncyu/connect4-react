import React from 'react';
import { Row } from 'reactstrap'

const HoverGrid = ({ background }) => {
    return (<Row>
        <div className="hover-square">
            <div className="grid-circle" style={{ background }}></div>
        </div>
    </Row>)
}

export default HoverGrid;