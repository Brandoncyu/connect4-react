import React, { Component } from 'react';
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
import { Container, Row, Col, Button } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [[], [], [], [], [], [], []],
      player: 1,
      gameOver: false,
      computerPlayer: false,
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

<<<<<<< HEAD
    if (column.length < 6 && !this.state.gameOver) {
=======
    //this below is to make sure that the column isnt full, and to make sure the game isn't over. If either of these conditions are false, it will not allow you to update the column, nor will you toggle the user.
    if (column.length < 6 && !this.state.gameOver){
      //this below adds the player number to the appropriate column.
>>>>>>> master
      column = [...column, this.state.player]
      const lastRow = column.length - 1

      const board = [...this.state.board.slice(0, columnNumber), column, ...this.state.board.slice(columnNumber + 1)]
<<<<<<< HEAD

=======
      
      //this below checks to see if the newest piece added to the board completes a sequence of four consecutive pieces. The larger algorithm is below. If a sequence is found it will return "true", otherwise it will return "false"
>>>>>>> master
      let gameOver = this.checkBoard(board, lastRow, columnNumber, this.state.player)

      if (gameOver) {
        this.setState({ board, gameOver })
      } else {
        this.setState({ board })
        this.toggleUser()
      }
    }
  }

  checkBoard = (board, lastRow, lastColumn, player) => {
<<<<<<< HEAD
=======
    //These functions check if the consecutive pieces horizontally, vertically, or diagonally are equal to the new piece. The functions should return a value. If any of the new combined variables are 3 or greater, then we have a connection of four consecutive pieces. This function will then return "true" 
    
    //The only exception is verticalCheck, which does not require combining a check in a different direction, so the logic is inherent to its function. It should only return "true" or "false"
>>>>>>> master
    const verticalCheck = consecutiveDown(board, lastRow, lastColumn, player)

    const horizontalCheck = consecutiveLeft(board, lastRow, lastColumn, player) + consecutiveRight(board, lastRow, lastColumn, player)

    const backslashCheck = consecutiveLeftDown(board, lastRow, lastColumn, player) + consecutiveRightUp(board, lastRow, lastColumn, player)

  toggleUser = () => {
    const player = (this.state.player % 2) + 1
    this.setState({player}, () => {
      if (this.state.player === 2 && this.state.computerPlayer) {
        setTimeout(this.computerTurn, 500)
      }
    })
  }

  computerTurn = () => {
      let random = Math.random() * 7
      let column = Math.floor(random)

      while (this.state.board[column].length === 6) {
        random = Math.random() * 7
        column = Math.floor(random)
      }
      this.addToColumn(column)
    const forwardSlashCheck = consecutiveRightDown(board, lastRow, lastColumn, player) + consecutiveLeftUp(board, lastRow, lastColumn, player)

    return verticalCheck || horizontalCheck >= 3 || backslashCheck >= 3 || forwardSlashCheck >= 3
  }

  toggleUser() {
    const player = (this.state.player % 2) + 1
    this.setState({ player })
  }

  render() {
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
              {!this.state.gameOver ?
                <h3>Player {this.state.player}'s turn</h3> :
                <h1 id="winner">Player {this.state.player} wins!</h1>
              }
<<<<<<< HEAD
              {this.state.player === 1 ?
                <div id="turnSquare" style={{ background: 'red' }} ></div> :
=======
              {/* This toggles the player's color */}
              { this.state.player === 1 ? 
                <div id="turnSquare" style={{ background: 'red' }} ></div> : 
>>>>>>> master
                <div id="turnSquare" style={{ background: 'black' }} ></div>
              }

              <Button color="primary" size="lg" onClick={this.resetBoard}>Reset Game!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App