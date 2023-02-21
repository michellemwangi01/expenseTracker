import React, {useState} from 'react'


export default function Usestatetest() {
   const  [count, setCount] = useState(0)
    function increment( ){
      setCount(count+1);
    }
    function decrement(){
      setCount (count-1)
      ( count-1);
      
    }
    
    
  return (
    <div>
        <button onClick={increment}>click to increment</button>
        <p>{count}</p>
        <button onClick={decrement}>click to decrement</button>
       
        
    </div>
  )
  }
