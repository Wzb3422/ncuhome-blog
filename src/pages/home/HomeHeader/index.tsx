import React from 'react';
import { useMedia } from 'react-use';
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
  const isWide = useMedia('(min-width: 768px)')
  return (
    <div className='home-header'>
      <div className='home-header-ncuhome'>NCUHOME</div>
      {isWide && <HomeHeaderTabs />}
    </div>
  )
}

export default HomeHeader;
