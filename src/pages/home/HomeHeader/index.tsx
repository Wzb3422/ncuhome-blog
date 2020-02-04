import React from 'react';
import './style.css';

const HomeHeaderTabs = () =>
  <div className='home-header-tabs'>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">产品</a></li>
      <li><a href="#">博客</a></li>
      <li><a href="#">团队</a></li>
    </ul>
  </div>

const HomeHeader: React.FC = () => {
  return (
    <div className='home-header'>
      <div className='home-header-ncuhome'>NCUHOME</div>
      <HomeHeaderTabs />
    </div>
  )
}

export default HomeHeader;
