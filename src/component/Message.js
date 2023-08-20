import React, { Component } from "react"

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'come another day'
        }
    }

    changeMessage(){
        this.setState(
            {message : 'thanks for subscribing'} 

        )
    }

    render(){
        return(
            <div>
                <h1>thanks for patronizing us {this.state.message}</h1>
                <button onClick={() =>this.changeMessage()}>please subscribe</button>
            </div>
        )
    }
}                                               

export default Message