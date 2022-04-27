
import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { INITIAL_POSTS, INITIAL_USERS } from './data';
import HomePage from './home/HomePage';
import PostPage from './home/PostPage';
import ProfilePage from './profile/ProfilePage';
import { v4 as uuid } from 'uuid';

function App() {
  const [userList, setUserList] = useState(INITIAL_USERS);
  const [postList, setPostList] = useState(INITIAL_POSTS);
  const [loggedInUserId, setLoggedInUserId] = useState(0); // not legit

  const handleAddPost = (newPost) => {
    newPost.id = uuid();
    newPost.userId = loggedInUserId;
    setPostList(currentPostList => [ ...currentPostList, newPost] );
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">Social Stuff</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to={"/users/" + loggedInUserId}>My Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage userList={userList} postList={postList} onAddPost={handleAddPost} />} />
          <Route path="/users/:userId" element={<ProfilePage userList={userList} postList={postList} />} />
          <Route path="/posts/:postId" element={<PostPage userList={userList} postList={postList} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
