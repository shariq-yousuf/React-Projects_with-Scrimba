import "./styles/App.css"
import data from "./data/data.json"
import Header from "./components/Header"
import Place from "./components/Place"

export default function App() {
  const places = data.map((place) => {
    return <Place key={place.id} {...place} />
  })

  return (
    <>
      <Header />
      <main>{places}</main>
    </>
  )
}
