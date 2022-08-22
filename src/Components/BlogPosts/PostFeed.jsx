import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import Post from './Post';
import { database } from './firebase-config';

// const postCollectionRef = database('posts');

export default function PostFeed() {
  const { list } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsFromFirebase());
  }, [dispatch]);
  console.log('list', list);

  return (
    <section>
      <h2>Post Feed</h2>
      {list.map((post) => (
        <Post post={post} />
      ))}
      <article>
        <h3>Title</h3>
        <p>Body</p>
      </article>
    </section>
  );
}
