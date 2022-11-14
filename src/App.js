import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const handleGamePlay = (index) => {
    // alert(index)
    // Makes a copy of the board in state so that we can modify a single instance inside the array
    let updatedBoard = [...board]
    if (index === treasureLocation) {
      // updating a single instance of the copied array to treasure emoji
      updatedBoard[index] = "💎"
      // setting entire updated board to state
      setBoard(updatedBoard)
    } else if (index === bombLocation) {
      updatedBoard[index] = "💣"
      setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "❌"
      setBoard(updatedBoard)
    }
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return(
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          )
        })}
        <button type="submit" onClick={refreshPage}>Restart</button>
      </div>
    </>
  )
}

export default App
