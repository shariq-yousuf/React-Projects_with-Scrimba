import { useState } from "react"
import { nanoid } from "nanoid"
import "./App.css"
import Die from "./components/Die/Die"

function App() {
  const [dice, setdice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      })
    }

    return newDice
  }

  function rollDice() {
    setdice(allNewDice())
  }

  const diceElements = dice.map((die) => <Die key={die.id} value={die.value} />)

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  )
}

export default App
