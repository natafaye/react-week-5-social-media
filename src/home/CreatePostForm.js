import React, { useState } from 'react'

export default function CreatePostForm({ onSubmit }) {
  const [postText, setPostText] = useState("")
  const onTextChange = (event) => setPostText(event.target.value);

  const onSubmitButtonClick = (event) => {
    event.preventDefault()
    const newPost = {
      text: postText
    }
    onSubmit(newPost);
  }

  return (
    <div className="row my-3">
        <form>
          <textarea name="text" id="post-text" className="form-control" value={postText} onChange={onTextChange} />
          <button className="btn btn-success mt-3" onClick={onSubmitButtonClick}>Make Post</button>
        </form>
    </div>
  )
}
