import React, {useState, useEffect} from 'react'
import axios from "axios"

const Feed = () => {

    const [posts, setPosts] = useState([


        {
            _id: 1,
            Image: 'https://images.unsplash.com/photo-1769912713026-e72009b871c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
            caption: 'This is a sample post',
            createdAt: '2024-06-01T12:00:00Z',
        }
    ])
    

    useEffect(() =>{
        axios.get('http://localhost:3000/posts')
        .then((response) => {
            console.log(response.data);
            setPosts(response.data.posts);
        })


    }
    , [])
  return (

    <section className='feed-section'>
        <h1>Feed</h1>
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post'>
                        <img src={post.Image} alt='Post' />
                        <p>{post.caption}</p>

                    </div>
                ))
            ) : (
                
                <p>No posts available.</p>
            )
        }
      </section>
  )
} 

export default Feed
