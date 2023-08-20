import React, { Component } from 'react'

//learning how to use state and setState in class componennt
class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment(){
        this.setState(
            {    
                 continue : this.state.count++,
           
            }, 
        )
    }

    
    
  render() {
    return (
      <div>
        <h2>counter - {this.state.count}</h2>
        <button onClick={() => this.increment()}>click to make it count</button>
      </div>
    )
  }
}

export default Counter