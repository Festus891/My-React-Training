import React from 'react'

// This is JSX with transpile into javascript code
function sayHello(props){
    return(
        <div>
            <h1>hello everyone {props.name}</h1>
            <p>{props.rate} i am just learning react</p>
            {props.children}
        </div>
     )
}

//! use of arrow function
// const Hello = () => <h1>Hello react</h1>

// !This is react without the use of Jsx

// function Hello(){
//     return React.createElement(
//         'div',
//         {id: 'menu', className:'value'},
//         React.createElement('h1', null, "Hello world, this react without using Jsx")
//     )
// }

export default sayHello



