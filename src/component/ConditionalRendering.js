import React, { Component } from 'react'

// !Conditional rendering practice in class component
class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user : prompt('identify yourself', ''),
       isLoggedIn : false
    }
  }
  render() {
    // ! FIRST METHOD USING IF.....ELSE
    if(this.state.isLoggedIn){
      if(this.state.user === 'Admin'){
        return <div>WELCOME ADMIN</div>
      }else if(this.state.user === 'Festus'){
        return<div>welcome festus</div>
      }else {
        return <div>Please login</div>
      }
    }else{
      return(
        <div>please make sure you log in</div>
      )
    }

   
  }
}

export default ConditionalRendering