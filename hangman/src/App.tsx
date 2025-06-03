import { useCallback, useEffect, useState } from "react"
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

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter)
  })

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  return (
    <div className={style.mainContainer}>
      <div className={style.resultText}>Lose Win </div>
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
      <HangmanWord guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
      <Keyboard activeLetters = {guessedLetters.filter(letter => 
        wordToGuess.includes(letter) 
      )}
        inactiveLetters = {incorrectLetters}
        addGuessedLetter = {addGuessedLetter}/>

    </div>
  )
}

export default App
