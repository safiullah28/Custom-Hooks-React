import "./App.css";
import React from "react";
import { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

//import Counter from './Counter';

//Usereducer is used to manage the state
// Alternative of useState
// usestate use when only simple state management but useReducer is use
//for complex state managements and make App efficiently

//Custom Hooks
//Why to use them
function App() {
  // const[count,setcount]=useState(0);
  // function Increment()
  // {
  //   setcount(count+1);
  // }
  // function Decrement()
  // {
  //   setcount(count-1);
  // }

  // const [count,Increment,Decrement]=UseCounter();

  return (
    <div className="App">
      {/*<Counter />*/}
      {/*
    <div><h1>Count = {count}</h1></div>
    <button onClick={Increment}>Increment</button>
    &nbsp;
    <button onClick={Decrement}>Decrement</button>*/}

    <Counter1/>
    <Counter2/>
    </div>
  );
}

export default App;
