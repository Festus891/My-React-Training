import React from 'react'

// ! THIS IS THE CHILD COMPONEnT RECEIVING  METHOD AS PROPS FROM PARENT COMPONENT
function ChildComponent (props){
    return(
        <div>
             <h1>{props.name}</h1>
             <button onClick = {props.sendRegard}>say hello parent</button>

             {/* //! PASS A PARAMETER TO THE PARENT COMPONENT USING ARROW FUNCTION */}
              <button onClick = {() => props.sendRegard("this is greeting from festus")}>say hello parent</button>

        </div>
       

    )
}

export default ChildComponent