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


function Keyboard() {
    return (
        <div className={style.keyboard}>
            {KEYS.map((key) => {
                return (
                    <button className={style.button} key={key}>{key}</button>
                )
            })}
        </div>
    )
}

export default Keyboard;