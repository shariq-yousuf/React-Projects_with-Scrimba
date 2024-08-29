import { nanoid } from "nanoid"
import "./Die.css"

interface DieProps {
  value: number
  isHeld: boolean
  holdDice: () => void
}

export default function Die({ value, isHeld, holdDice }: DieProps) {
  const dotElements = []
  for (let i = value; i > 0; i--) {
    dotElements.push(<span key={nanoid()} className="dot"></span>)
  }

  return (
    <div
      className="die"
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
      onClick={holdDice}
    >
      {dotElements}
    </div>
  )
}
