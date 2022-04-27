import React from 'react'
import PostCard from './PostCard'

export default function PostCardList({ postList, userList }) {
  return (
    <div className="row">
        { postList.map(post => (
            <div className="col-12 my-2" key={post.id}>
                <PostCard post={post} postAuthor={userList.find( user => user.id === post.userId )} />
            </div>
        ))}
    </div>
  )
}
