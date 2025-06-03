import { useState } from "react"
import words from "./wordList.json" 
import style from "./css/App.module.css"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {

  const [wordToGuess, setWorkToGuess] = useState(() => {
    return words[Math.floor(Math.random()* words.length)]
  })
  console.log(wordToGuess)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className={style.mainContainer}>
      <div className={style.resultText}>Lose Win </div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>

    </div>
  )
}

export default App
