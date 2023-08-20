import React, { Component } from 'react'

class Practical extends Component {
    constructor(props) {
      super(props)
      this.state = {
         increase: 10
      }
    }
  render() {
    return (
      <div>
        <h2>{this.state.increase} who are you</h2>
      </div>
    )
  }
}

export default Practical