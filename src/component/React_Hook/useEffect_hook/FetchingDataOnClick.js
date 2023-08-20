import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchingDataOnClick() {
    const [Post, setPost] = useState([])
    const [Id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(Id)
    }


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButtonClick])
  return (
    <div>
        <h1>Data fetching individual post request onButton click using Axios package get request</h1>
        <h3>We are able to successfully fetch an individual post by passing in the ID entered by the user and post is display on button Click</h3>
        <input type='text' value={Id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>fetch data</button>
        <div>{Post.body}</div>
    </div>
  )
}

export default FetchingDataOnClick;