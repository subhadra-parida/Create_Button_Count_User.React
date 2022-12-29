import React, { useState } from "react";
import './App.css';

function App(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1 id="heading">Now the number is :-{count}</h1>
      <button id="button1" onClick={()=>{
          setCount(count+1)
        }}>Click</button>
    </div>
  )
}
export default App;

