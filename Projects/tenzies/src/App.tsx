import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import ConfettiExplosion from "react-confetti-explosion"
import "./App.css"
import Die from "./components/Die/Die"

function App() {
  const [dice, setdice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(1)
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("Best Score"))
  )

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const allSameValue = dice.every((die) => die.value === dice[0].value)

    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  useEffect(() => {
    if (tenzies) {
      setBestScore((prevBestScore) =>
        rolls < prevBestScore || prevBestScore === 0 ? rolls : prevBestScore
      )
    }
  }, [tenzies])

  useEffect(() => {
    localStorage.setItem("Best Score", JSON.stringify(bestScore))
  }, [bestScore])

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
    if (tenzies) {
      setTenzies(false)
      setRolls(1)
      setdice(allNewDice())
      // setBestScore(0)
    } else {
      setdice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie()
        })
      )

      setRolls((prevRolls) => prevRolls + 1)
    }
  }

  function holdDice(id: string) {
    if (!tenzies) {
      setdice((prevDice) =>
        prevDice.map((die) => {
          return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        })
      )
    }
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
      {tenzies && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      )}
      <div className="instructions-container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <div className="scores">
        <p className="rolls-count">Rolls: {rolls}</p>
        <p className="total-rolls">Best Score: {bestScore}</p>
      </div>
      <button className="roll-btn" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App
