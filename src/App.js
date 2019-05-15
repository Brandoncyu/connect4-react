import React, { Component }  from 'react';
import './App.css';
import Column from './components/Column';
import {
  consecutiveDown, 
  consecutiveLeft, 
  consecutiveRight, 
  consecutiveLeftDown, 
  consecutiveRightUp, 
  consecutiveRightDown, 
  consecutiveLeftUp 
} from './components/counting-algorithims/count'
import {Container, Row} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      board: [ [], [], [], [], [], [], [] ],
      player: 1,
      gameOver: false,
      lastRow: 0,
      lastColumn: 0,
      columnFull: false
    }
  }

  resetBoard(){
    this.setState({
      board: [[], [], [], [], [], [], []],
      player: 1,
      gameOver: false,
      lastRow: 0,
      lastColumn: 0,
      columnFull: false
    })
  }


  addToColumn = (columnNumber) => {
    let column = this.state.board[columnNumber]
    if (column.length < 6 && !this.state.gameOver){
      column = [...column, this.state.player]
      const lastRow = column.length - 1
      const board = [...this.state.board.slice(0, columnNumber), column, ...this.state.board.slice(columnNumber + 1)]
      
      let gameOver = this.checkBoard(board, lastRow, columnNumber, this.state.player)
      console.log(gameOver)
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
    console.log(verticalCheck, horizontalCheck, backslashCheck, forwardSlashCheck)
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
      <Container fluid>
        <Row className="board" noGutters={'false'}>
          {this.state.board.map((column, value) => { 
            return <Column 
              key={value} 
              number={value} 
              pieces={column} 
              gameOver={this.state.gameOver}
              addToColumn={this.addToColumn}
            />
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
