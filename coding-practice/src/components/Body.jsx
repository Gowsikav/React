import { useState } from "react";

export function Body() {

    let [counterValue, setCounterValue] = useState(0);
    const incrementValue = () => setCounterValue(counterValue + 1);
    const decrementValue = () => setCounterValue(counterValue - 1);
    const reset = () => setCounterValue(0);
    return (
        <div className="body">
            <h1>{counterValue}</h1>
            <div className="counterBtns">
                <button onClick={incrementValue} style={{backgroundColor:"green"}}>Increment(+)</button>
                <button onClick={decrementValue} style={{backgroundColor:"red"}}>Decrement(-)</button>
                <button onClick={reset} style={{backgroundColor:"yellow"}}>Reset</button>
            </div>

        </div>
    );
}