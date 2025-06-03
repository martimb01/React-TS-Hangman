import style from "../css/HangmanDrawing.module.css"

function HangmanDrawing() {
    return(
        <div className={style.mainContainer}>
            <div style={{height: "10px", 
                        width: "250px", 
                        background: "black"}}/>
        </div>
    )
}

export default HangmanDrawing;