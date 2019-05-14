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

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      board: [ [], [], [], [], [], [], [] ],
      player: 1,
      gameOver: false,
      lastRow: 0,
      lastColumn: 0
    }
  }

  resetBoard(){
    this.setState({
      board: [[], [], [], [], [], [], []],
      player: 1,
      gameOver: false,
      lastRow: 0,
      lastColumn: 0
    })
  }

  addToColumn = (number) => {
    let column = this.state.board[number]
    if (column.length < 6){
      column = [...column, this.state.player]
      const lastRow = column.length - 1
      const board = [...this.state.board.slice(0, number), column, ...this.state.board.slice(number + 1)]
      this.setState({ board, lastRow, lastColumn: number })
    }
    
  }

  checkBoard = () => {
    const { board, lastRow, lastColumn, player} = this.state
    const verticalCheck = consecutiveDown(board, lastRow, lastColumn, player)
    const horizontalCheck = consecutiveLeft(board, lastRow, lastColumn, player) + consecutiveRight(board, lastRow, lastColumn, player)
    const backslashCheck = consecutiveLeftDown(board, lastRow, lastColumn, player) + consecutiveRightUp(board, lastRow, lastColumn, player)
    const forwardSlashCheck = consecutiveRightDown(board, lastRow, lastColumn, player) + consecutiveLeftUp(board, lastRow, lastColumn, player)
    if (verticalCheck || horizontalCheck >= 3 || backslashCheck >= 3 || forwardSlashCheck >=3){
      this.setState({gameOver: true})
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
    console.log(this.state)
    return (
      <div>
      {this.state.board.map((column, value) => { 
        return <Column 
          key={value} 
          number={value} 
          pieces={column} 
          addToColumn={this.addToColumn}
        />
      })}
      </div>
    );
  }
}

export default App;
