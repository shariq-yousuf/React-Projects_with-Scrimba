import { useState } from "react"
import "./App.css"
import Header from "../Header/Header"
import Meme from "../Meme/Meme"

function App() {
  return (
    <>
      <Header />
      <main>
        <Meme />
      </main>
    </>
  )
}

export default App
