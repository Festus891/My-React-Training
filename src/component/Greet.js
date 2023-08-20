import React from 'react'

// !how destructuring props and state work in functional component(two ways either in the (parameter) or in the function body)
function Greet({title, title2}){
    // const {title, title2} = props
    return(

        <h3>Hello {title} and {title2}</h3>

    )
}

export default Greet
