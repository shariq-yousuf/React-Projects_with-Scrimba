import "./Die.css"

interface DieProps {
  value: number
  isHeld: boolean
  holdDice: () => void
}

export default function Die({ value, isHeld, holdDice }: DieProps) {
  return (
    <div
      className="die"
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
      onClick={holdDice}
    >
      {value}
    </div>
  )
}
