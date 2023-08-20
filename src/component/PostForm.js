import React, { Component } from "react"


class PostForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        
        }
      }
  
    render(){
       
        return(
            <div>
               <form>
                <div>
                    <input input="text" name= "userId" />
                </div>
                <div>
                    <input input="text" name= "title" />
                </div>
                <div>
                    <input input="text" name= "body" />
                </div>
               </form>
            </div>
        )
    }
}

export default PostForm