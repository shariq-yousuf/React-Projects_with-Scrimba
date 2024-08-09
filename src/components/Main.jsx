import "./styles/Main.css"
import Card from "./Card"
import data from "../data/data.json"

export default function Main() {
  const cards = data.reverse().map((card) => {
    return <Card key={card.id} {...card} />
  })

  return <main>{cards}</main>
}
