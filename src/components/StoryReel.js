import React from 'react';
import Story from './Story';
import { data } from '../data';
import '../css/StoryReel.css';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      {data.map(({ image, profileSrc, title }) => (
        <Story image={image} profileSrc={profileSrc} title={title} />
      ))}
    </div>
  );
};

export default StoryReel;
