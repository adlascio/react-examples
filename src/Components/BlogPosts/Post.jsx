<<<<<<< HEAD
import React from 'react';
import {
  removePost,
  removePostFromFirebase,
  updatePost,
  updatePostInFirebase,
} from './features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Post(props) {
  const { post } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removePostFromFirebase(id));
  };
  const handleEdit = () => {
    if (isEditing) {
      const updatedPost = { ...post, title, body };
      dispatch(updatePostInFirebase(updatedPost));
    }
    setIsEditing(!isEditing);
  };
  return (
    <article key={post.id}>
      {!isEditing ? (
        <>
          <button onClick={() => handleDelete(post.id)}>X</button>
          <button onClick={handleEdit}>Edit</button>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Done</button>
          <div>
            <label htmlFor=''>Title</label>
            <input
              type='text'
=======
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removePost,
  updatePost,
  updatePostInFirebase,
  removePostFromFirebase,
} from './features/posts/postsSlice';

export default function Post(props) {
  const { post } = props;
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.posts);
  const [isEditing, setIsEditing] = useState(false);
  // const editTitleRef = useRef();
  // const editBodyRef = useRef();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return (
    <article key={post.id}>
      {isEditing ? (
        <>
          <button
            onClick={() => {
              const updatedPost = {
                ...post,
                title,
                body,
              };
              dispatch(updatePostInFirebase(updatedPost));
              setIsEditing(false);
            }}>
            Done
          </button>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id=''
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
<<<<<<< HEAD
            <label htmlFor=''>Body</label>
=======
            <label htmlFor='body'>Body</label>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
            <textarea
              name=''
              id=''
              cols='30'
              rows='2'
              value={body}
              onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
        </>
<<<<<<< HEAD
=======
      ) : (
        <>
          {isUpdating.status && isUpdating.postId === post.id ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <button onClick={() => dispatch(removePostFromFirebase(post.id))}>
                X
              </button>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </>
          )}
        </>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      )}
    </article>
  );
}
