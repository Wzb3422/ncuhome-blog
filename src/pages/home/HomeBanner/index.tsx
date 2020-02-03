import React from 'react';
import './style.css';
import { useMedia } from 'react-use';

const Shapes: React.FC = () =>
  <>
    <div className='home-banner-big-circle'></div>
    <div className='home-banner-filled-black-circle'></div>
  </>

const HomeBanner: React.FC = () => {

  const isWide = useMedia('(min-width: 768px)');

  return (
    <div className='home-banner'>
      <h1>Blogs</h1>
      <h3>Thoughts, stories, and ideas...</h3>
      <h4>家园人的点滴思考与分享</h4>
      {isWide && <Shapes />}
    </div>
  )
}
  

export default HomeBanner;
