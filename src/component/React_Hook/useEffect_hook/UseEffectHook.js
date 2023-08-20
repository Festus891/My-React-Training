import React, {useState, useEffect } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0)

    useEffect(() =>{
      console.log('useEffect - render after count value change, conditionally render')
      document.title = `you clicked ${count} times`
    }, [count])

    return (
     <div>  
        <button onClick={() => setCount(count + 1 )}>you have clicked {count} times</button>
    </div> 
  
    );
  }
  
  export default UseEffectHook;