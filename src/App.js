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

    //The board is represented as an array of arrays in the state. There are seven arrays within the board array, representing the seven columns in the board. When a player chooses which column he or she wants, to put the piece in it will push their player number ("1" or "2") in the appropriate array. For example, if the first player chooses the middle column to put the first piece in, the board will now look like this in the state: [ [], [], [], [1], [], [], [] ]
    this.state = {
      board: [ [], [], [], [], [], [], [] ],
      player: 1,
      gameOver: false,
    }
  }

  resetBoard = () => {
    //This resets the board to a blank slate. 
    this.setState({
      board: [[], [], [], [], [], [], []],
      player: 1,
      gameOver: false,
    })
  }

//This function adds the player value, which is 1 or 2, to each column.
  addToColumn = (columnNumber) => {
    // The "columnNumber" variable that is passed in is the index the column arrray occupies in this.state.board. For example, if the state is [[1,2,1], [2,1], [1], [], [], [], []], the columnNumber for '[1,2,1]' is 0, '[2, 1]' is 1, '[1]' is 2, etc.
    let column = this.state.board[columnNumber]

    //this below is to make sure that the column isnt full, and to make sure the game isn't over. If either of these conditions are false, it will not allow you to update the column, nor will you toggle th euser.
    if (column.length < 6 && !this.state.gameOver){
      //this below adds the player number to the appropriate column.
      column = [...column, this.state.player]

      //this below represents the row number that the latest piece occupies. This will be needed to check to see if any sequence of fours will be found.
      const lastRow = column.length - 1

      //this below adds the array back to a copy of the original board.
      const board = [...this.state.board.slice(0, columnNumber), column, ...this.state.board.slice(columnNumber + 1)]
      
      //this below checks to see if the newest piece added to the board completes a sequence of four consecutive pieces.the larger algorithim is below. If a sequence is found it will return "true", otherwise it will return "false"
      let gameOver = this.checkBoard(board, lastRow, columnNumber, this.state.player)
      
      //if game over returns "true", the board will update with the latest piece, but you will not be able to update it anymore. Otherwise the board will be updated with the latest piece and you will toggle to the next user.
      if (gameOver){
        this.setState({ board, gameOver })
      } else{
        this.setState({board})
        this.toggleUser()
      }
    } 
  }

  checkBoard = (board, lastRow, lastColumn, player) => {
    //These functions check if the consecutive pieces horizontally, vertically, or diagonally are equal to the new piece. The functions should return a value. If any of the new combined variables are 3 or greater, then we have a connection of four consecutive pieces. This function will then return "true" 
    
    //The only exception is verticalCheck, which does not require combining a check in a different direction, so the logic is inheret to its function. It should only return "true" or "false"
    const verticalCheck = consecutiveDown(board, lastRow, lastColumn, player)

    const horizontalCheck = consecutiveLeft(board, lastRow, lastColumn, player) + consecutiveRight(board, lastRow, lastColumn, player)

    const backslashCheck = consecutiveLeftDown(board, lastRow, lastColumn, player) + consecutiveRightUp(board, lastRow, lastColumn, player)
    
    const forwardSlashCheck = consecutiveRightDown(board, lastRow, lastColumn, player) + consecutiveLeftUp(board, lastRow, lastColumn, player)
    
    return verticalCheck || horizontalCheck >= 3 || backslashCheck >= 3 || forwardSlashCheck >=3
  }

  toggleUser() {
    //This toggles the user between every turn, granted the game is not over.
    const player = (this.state.player % 2) + 1
    this.setState({player})
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
              {/* This indiciates whose turn it is. If the game is over, it will return a larger text indicating the 
              winning player */}
              { !this.state.gameOver ? 
                <h3>Player {this.state.player}'s turn</h3> : 
                <h1 id="winner">Player {this.state.player} wins!</h1>
              }
              {/* This toggles the player's color */}
              { this.state.player === 1 ? 
                <div id="turnSquare" style={{ background: 'red' }} ></div> : 
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

export default App;
