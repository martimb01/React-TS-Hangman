import style from "../css/HangmanWord.module.css"
const word = "testerino"
const guessedLetters = "e"

function HangmanWord() {
    return (
        <div className={style.mainContainer}>
            {word.split("").map((letter, index) => {
                return <span className={style.letter}>
                            <span style={{
                                visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                            }} key={index}>
                                {letter}
                            </span>  
                        </span>
            })}
        </div>
    )
}

export default HangmanWord;