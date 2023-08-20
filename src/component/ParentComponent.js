import React, { Component } from "react"
import ChildComponent from './ChildComponent';

//! HOW A CHILD COMPONENT CAN COMMUNICATE OR PASS PROPS AS METHOD TO PARENT COMPONENT

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sayHi: "Good morning my parent"
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(GreeterName){
        alert(`hello ${this.state.sayHi} and ${GreeterName}`)
    }

   

    render(){
        
        return(
            <div>
                <ChildComponent sendRegard = {this.greetParent} name = "we are important"/>
            </div>
        )
    }
}

export default ParentComponent