import React from 'react'
import { useParams } from 'react-router-dom';
import PostCardList from '../home/PostCardList';

export default function ProfilePage({ userList, postList }) {
    const params = useParams();
    const userId = parseInt(params.userId);
    // TODO: handle if they put in a bad id
    const user = userList.find(user => user.id === userId);
    const userPosts = postList.filter(post => post.userId === userId);
    return (
        <div className="row mt-3">
            <h2>{ user.name }</h2>
            <PostCardList postList={userPosts} userList={userList} />
        </div>
    )
}
