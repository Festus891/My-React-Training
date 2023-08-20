import React, { Component } from "react"

//destructuring props in class component
class GreetMore extends Component {
    render(){
        const {title, title2} = this.props
        return(
            <div>
                <h1>hello {title} and {title2} </h1>
            </div>
        )
    }
}

export default GreetMore