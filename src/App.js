import React, { Component }  from 'react';
import './App.css';

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

  toggleUser(){
    if (this.state.player === 1){
      this.setState({ player: 2 })
    } else{
      this.setState({ player: 1 })
    }
  }

  consecutiveLeft(row, column, player = 1, count = 0, ) {
    row--
    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++

    return this.consecutiveLeft(row, column, player, count)
  }

  consecutiveRight(row, column, player = 1, count = 0) {
    row++
    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++

    return this.consecutiveRight(row, column, player, count)
  }

  consecutiveDown(row, column, player, count = 0) {
    column--
    if (count === 3) {
      return true
    } else if (column === -1) {
      return false
    } else if (this.state.board[row][column] !== player) {
      return false
    }

    count++

    return this.consecutiveDown(row, column, player, count)
  }

  consecutiveLeftDown(row, column, player, count = 0) {
    row--
    column--

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return this.consecutiveLeftDown(row, column, player, count)
  }

  consecutiveRightUp(row, column, player, count = 0) {
    row++
    column++

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return this.consecutiveRightUp(row, column, player, count)
  }

  consecutiveRightDown(row, column, player, count = 0) {
    row++
    column--

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return this.consecutiveRightDown(row, column, player, count)
  }

  consecutiveLeftUp(row, column, player, count = 0) {
    row--
    column++

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined || row < 0) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return this.consecutiveLeftUp(row, column, player, count)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
