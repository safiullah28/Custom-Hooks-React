import React from 'react';

import {useState} from 'react';

function useCounter(initialVal) {
    const[count,setcount]=useState(initialVal);

  function Increment()
  {
    setcount(count+1);
  }
  function Decrement()
  {
    setcount(count-1);
  }
    return[count,Increment,Decrement]

}

export default useCounter
