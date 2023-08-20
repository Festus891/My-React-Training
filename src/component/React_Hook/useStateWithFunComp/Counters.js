import React, { useState } from 'react'


function Counters() {
  const initialCount = 0
    const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h2>count: {count}</h2>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button> */}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        
    </div>
  )
}


export default Counters;
