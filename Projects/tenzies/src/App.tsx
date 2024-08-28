import { useState } from "react"
import "./App.css"
import Die from "./components/Die/Die"

function App() {
  const [dice, setdice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }

    return newDice
  }

  const diceElements = dice.map((die, i) => (
    <Die key={i} value={die} />
  ))

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  )
}

export default App
