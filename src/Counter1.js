import React from 'react'
import useCounter  from "./useCounter.js";

function Counter1() {
    const [count,Increment,Decrement]=useCounter(10);

  return (
    <div>
    <div><h1>Count = {count}</h1></div>
    <button onClick={Increment}>Increment</button>
    &nbsp;
    <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter1
