import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({ post, postAuthor }) {
  return (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title"><Link to={"/users/" + postAuthor.id}>{ postAuthor.name }</Link></h4>
            <p>{ post.text }</p>
            <Link to={"/posts/" + post.id}>Go to Page</Link>
        </div>
    </div>
  )
}
