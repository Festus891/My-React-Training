import React, {useState, useEffect} from 'react'

function HookMouse() {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

   useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () =>{
        console.log('component unmount')
        window.removeEventListener('mousemove', logMousePosition)
    }
   }, [])

    return(
        <div>
            cordinate x -{x} and cordinate y -{y}
        </div>
    )
}

export default HookMouse;