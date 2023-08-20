import React, { Component } from "react"

class Welcome extends Component {
    render(){
        return(
            <div>
                <h>This is class component: see props by example {this.props.name} </h>
                <p>The more you learn the more you know</p>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome