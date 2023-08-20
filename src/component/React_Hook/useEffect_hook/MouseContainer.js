import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'


function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {/* if the display variable is set to true we render the hook mouse component  */}
            {display &&  <HookMouse /> }
        </div>
    )
}

export default MouseContainer;