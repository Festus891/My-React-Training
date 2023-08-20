import React from 'react'

//! How to use event handling in functional component 
function FunctionalClick() {
    function clickOnMe(){
        let user = prompt('input you name', '')
        if(user === "festus"){
            alert('Welcome on board')
        }else{
            alert('stranger')
        };

    }
  return (
    <div>
        <button onClick={clickOnMe}>CLICK ON ME</button>
    </div>
  )
}

export default FunctionalClick


