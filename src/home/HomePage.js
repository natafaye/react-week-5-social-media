import React from 'react'
import CreatePostForm from './CreatePostForm'
import PostCardList from './PostCardList'

export default function HomePage({ userList, postList, onAddPost }) {
  return (
    <>
        <CreatePostForm onSubmit={onAddPost} />
        <PostCardList postList={postList} userList={userList} />
    </>
  )
}
