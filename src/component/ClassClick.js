import React, { Component } from "react"

//! HOW TO USE EVENT HANDLING IN CLASS COMPONENT 
class ClassClick extends Component {
    clickOnMe(){
        let user = "I am aderibgbe festus by name, please who are you?"
        alert(user)
    }
    render(){
     
        return(
            <div>
                <button onClick={this.clickOnMe}>cclick on me to know how i work</button>
            </div>
        )
    }
}

export default ClassClick