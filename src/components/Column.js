import React, {Component} from 'react';
import {Container, Col} from 'reactstrap'
import HoverGrid from './HoverGrid'
import Grid from './Grid'

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: 'blue',
        }
    }

    onClick = () => {
        this.props.addToColumn(this.props.number)
    }

    onMouseOver = () => {
        const player = this.props.player
        const colors = ['blue', 'red', 'black']

        this.setState({
            background: colors[player]
        })
    }

    onMouseLeave = () => {
        this.setState({ background: 'blue' })
    }
   
    render(){
        let fullColumn = [...this.props.pieces]
        while (fullColumn.length < 6) {
            fullColumn.push(0)
        }
        let fullColumnReverse = fullColumn.reverse()
        return (<Col onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
            <Container>
                <HoverGrid background={this.state.background} />
            {fullColumnReverse.map((number, index) => <Grid key={index} number={number} />)}
        </Container>
    </Col >)
    }
    
}

export default Column;
