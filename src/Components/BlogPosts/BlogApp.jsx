import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import ProtectedRoute from './ProtectedRoute';

const BlogApp = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/my-posts'>Posts</Link>
        <Link to='/new-post'>New Post</Link>
      </nav>
      <Routes>
        <Route path='/' element={<BlogPosts />} />
        <Route
          path='/new-post'
          element={
            <ProtectedRoute>
              <PostForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-posts'
          element={
            <ProtectedRoute>
              <PostFeed />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default BlogApp;
