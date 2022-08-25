import React from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPostsFromFirebase } from './features/posts/postsSlice';

const PostFeed = () => {
  const { list } = useSelector((state) => state.posts);
  const userId = useSelector((state) => state.user.info.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsFromFirebase(userId));
  }, []);
  return (
    <div>
      <section>
        {list.map((post) => (
          <Post post={post} />
        ))}
      </section>
    </div>
  );
};

export default PostFeed;
