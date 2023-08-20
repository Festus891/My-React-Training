import React, { Component } from "react"
//!EVENT BINDER IN REACT: HOW TO BIND EVENT IN REACT 
class EventBinder extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Welcome wonderful people of God'
        }

        //Binding in the constructor
        this.clickOnMe = this.clickOnMe.bind(this)
    }

    // clickOnMe() {
    //      this.setState({
    //          message : "Goodbye wonderful people"
    //     })
    // }

    clickOnMe = () => {
         this.setState({
             message : "Goodbye wonderful people"
        })
    }



    render(){
        return(
            <div>
                <h3>Using setState to change current state by clicking on button below</h3>
                <h3>{this.state.message}</h3>
                 {/* //!FIRST METHOD OF BINDING EVENT IS ADD TO ADD THE BIND KEYWORD AND BIND THE HANDLER IN THE RENDER METHOD */}
                <button onClick = {this.clickOnMe.bind(this)}>Event binding</button>
                 {/* //!SECOND METHOD IS TO USE ARROW FUnCTION IN THE RENDER METHOD */}
                <button onClick = {() =>this.clickOnMe()}>Event binding</button>
                 {/* //! third method is to bind in the constructor */}
                <button onClick = {this.clickOnMe}>Event binding</button>
                {/* //! fourth method is to use arrow function in the class component */}
                 <button onClick = {this.clickOnMe}>Event binding</button>
            </div>
        )
    }
}

export default EventBinder