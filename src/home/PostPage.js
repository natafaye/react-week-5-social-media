import React from 'react'
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';

export default function PostPage({ userList, postList }) {
    // Get the post id from the URL
    const params = useParams();
    const postId = params.postId;

    // Use that to get the post and then the user for that post
    const post = postList.find(post => post.id === postId)
    const postAuthor = userList.find( user => user.id === post.userId );

    return (
        <div className="row mt-3">
            <div className="col">
                <PostCard post={post} postAuthor={postAuthor} />
            </div>
        </div>
    )
}
