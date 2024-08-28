import "./Die.css"

interface DieProps {
  value: number
}

export default function Die({ value }: DieProps) {
  return <div className="die">{value}</div>
}
