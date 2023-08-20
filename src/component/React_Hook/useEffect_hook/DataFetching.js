import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
  return (
    <div>
        <h1>Data fetching using Axios package get request</h1>
        <ul>
            {
                posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DataFetching