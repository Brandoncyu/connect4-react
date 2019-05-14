function consecutiveDown(array, row, column, player, count = 0) {
    column--
    if (count === 3) {
        return true
    } else if (column === -1) {
        return false
    } else if (this.state.board[row][column] !== player) {
        return false
    }

    count++

    return consecutiveDown(array, row, column, player, count)
}

function consecutiveLeft(array, row, column, player, count = 0){
    row--
    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++

    return consecutiveLeft(array, row, column, player, count)
}

function consecutiveRight(array, row, column, player, count = 0){
    row++
    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++

    return consecutiveRight(array, row, column, player, count)
}

function consecutiveLeftDown(array, row, column, player, count = 0){
    row--
    column--

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return consecutiveLeftDown(array, row, column, player, count)
}

function consecutiveRightUp(array, row, column, player, count = 0){
    row++
    column++

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return consecutiveRightUp(array, row, column, player, count)
}

function consecutiveRightDown(array, row, column, player, count = 0){
    row++
    column--

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return consecutiveRightDown(array, row, column, player, count)
}

function consecutiveLeftUp(array, row, column, player, count = 0){
    row--
    column++

    let arrayRow = this.state.board[row]
    if (arrayRow === undefined || row < 0) return count

    let arrayCol = arrayRow[column]

    if (arrayCol === undefined || arrayCol !== player) return count

    count++
    return consecutiveLeftUp(array, row, column, player, count)
}

module.exports = { consecutiveDown, consecutiveLeft, consecutiveRight, consecutiveLeftDown, consecutiveRightUp, consecutiveRightDown, consecutiveLeftUp}