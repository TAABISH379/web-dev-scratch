import React, {useState} from 'react'

const feed = () => {

    const [posts, setPosts] = useState([

        {
            _id: 1,
            Image: 'https://images.unsplash.com/photo-1769912713026-e72009b871c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
            caption: 'This is a sample post',
            createdAt: '2024-06-01T12:00:00Z',
        }
    ])
  return (

    <section className='feed-section'>
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
        <h1>Feed</h1>
      </section>
  )
} 

export default feed
