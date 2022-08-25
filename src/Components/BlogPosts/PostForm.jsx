import React, { useRef } from 'react';
import { postAPostToFirebase } from './features/posts/postsSlice';
import { useDispatch } from 'react-redux';

const PostForm = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      userId: 1,
    };
    dispatch(postAPostToFirebase(newPost));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' id='' ref={titleRef} />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <textarea name='' id='' cols='30' rows='2' ref={bodyRef}></textarea>
      </div>
      <button>Submit Post</button>
    </form>
  );
};

export default PostForm;
