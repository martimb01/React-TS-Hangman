import style from "../css/HangmanWord.module.css"
type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
}


function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
    return (
        <div className={style.mainContainer}>
            {wordToGuess.split("").map((letter, index) => {
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