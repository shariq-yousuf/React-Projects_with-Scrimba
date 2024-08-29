import { useState } from "react"
import { nanoid } from "nanoid"
import "./App.css"
import Die from "./components/Die/Die"

function App() {
  const [dice, setdice] = useState(allNewDice())

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }

    return newDice
  }

  function rollDice() {
    setdice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie()
      })
    )
  }

  function holdDice(id: string) {
    setdice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

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
