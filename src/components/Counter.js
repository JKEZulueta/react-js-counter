import { useState } from "react";
import "../styles/Counter.css";

function Counter(){

const [number, setNumber] = useState(0);

function increase(){
    setNumber(number+1);
}

function decrease(){
    setNumber(number-1);
}

return (

    <div className="counter">
        <fieldset className="myFieldset">
        <button onClick={increase} className="increase">+</button>
        <span className="mySpan">{number}</span>
        <button onClick={decrease} className="decrease">-</button>
        </fieldset>
    </div>


);
}

export default Counter;