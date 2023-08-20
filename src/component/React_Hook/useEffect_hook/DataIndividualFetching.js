import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataIndividualFetching() {
    const [Post, setPost] = useState([])
    const [Id, setId] = useState(1)


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[Id])
  return (
    <div>
        <h1>Data fetching individual post request  using Axios package get request</h1>
        <h3>We are able to successfully fetch an individual post by passing in the ID entered by the user</h3>
        <input type='text' value={Id} onChange={e => setId(e.target.value)}/>
        <div>{Post.body}</div>
    </div>
  )
}

export default DataIndividualFetching;