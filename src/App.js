import React, { Component }  from 'react';
import './App.css';
import Board from './components/Board';
import {
  consecutiveDown, 
  consecutiveLeft, 
  consecutiveRight, 
  consecutiveLeftDown, 
  consecutiveRightUp, 
  consecutiveRightDown, 
  consecutiveLeftUp 
} from './algorithims/count'
import {Container, Row, Col, Button} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      board: [ [], [], [], [], [], [], [] ],
      player: 1,
      gameOver: false,
    }
  }

  resetBoard = () => {
    this.setState({
      board: [[], [], [], [], [], [], []],
      player: 1,
      gameOver: false,
    })
  }


  addToColumn = (columnNumber) => {
    let column = this.state.board[columnNumber]
    if (column.length < 6 && !this.state.gameOver){
      column = [...column, this.state.player]
      const lastRow = column.length - 1
      const board = [...this.state.board.slice(0, columnNumber), column, ...this.state.board.slice(columnNumber + 1)]
      
      let gameOver = this.checkBoard(board, lastRow, columnNumber, this.state.player)
      
      if (gameOver){
        this.setState({ board, gameOver })
      } else{
        this.setState({board})
        this.toggleUser()
      }
    } 
  }

  checkBoard = (board, lastRow, lastColumn, player) => {
    const verticalCheck = consecutiveDown(board, lastRow, lastColumn, player)
    const horizontalCheck = consecutiveLeft(board, lastRow, lastColumn, player) + consecutiveRight(board, lastRow, lastColumn, player)
    const backslashCheck = consecutiveLeftDown(board, lastRow, lastColumn, player) + consecutiveRightUp(board, lastRow, lastColumn, player)
    const forwardSlashCheck = consecutiveRightDown(board, lastRow, lastColumn, player) + consecutiveLeftUp(board, lastRow, lastColumn, player)
    if (verticalCheck || horizontalCheck >= 3 || backslashCheck >= 3 || forwardSlashCheck >=3){
      return true
    } else{
      return false
    }
  }

  toggleUser() {
    if (this.state.player === 1) {
      this.setState({ player: 2 })
    } else {
      this.setState({ player: 1 })
    }
  }

  render(){
    return (
      <Container >
        <h1 id="title">Connect Four!</h1>
        <Row>
          <Col lg="9" >
            <Board
              board={this.state.board}
              gameOver={this.state.gameOver}
              addToColumn={this.addToColumn}
            />
          </Col>
          <Col lg="3"  >
            <div className="status" >
              {!this.state.gameOver ? <h3>Player {this.state.player}'s turn</h3> : <h1 id="winner">Player {this.state.player} wins!</h1>}
              
              {this.state.player === 1 ? <div className="turnCircle" style={{ background: 'red' }} ></div> : <div className="turnCircle" style={{ background: 'black' }} ></div>}
          
              <Button color="primary" size="lg" onClick={this.resetBoard}>Reset Game!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
