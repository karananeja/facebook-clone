import React, { useEffect, useState } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';
import '../css/Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {console.log(posts)}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  );
};

export default Feed;
