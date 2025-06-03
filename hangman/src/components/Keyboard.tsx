import style from "../css/Keyboard.module.css"
const KEYS: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

type KeyboardProps = {
   disabled: boolean, 
   activeLetters: string[], 
   inactiveLetters: string[], 
   addGuessedLetter: (letter: string) => void
}

function Keyboard({disabled,activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    return (
        <div className={style.keyboard}>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key.toLowerCase())
                const isInactive = inactiveLetters.includes(key.toLowerCase())
                return (
                    <button onClick={() => addGuessedLetter(key.toLowerCase())} 
                            className={`${style.button} ${isActive ? style.active : ""}
                            ${isInactive ? style.inactive : ""}`}
                            disabled= {isInactive || isActive || disabled} 
                            key={key}
                    >{key}</button>
                )
            })}
        </div>
    )
}

export default Keyboard;