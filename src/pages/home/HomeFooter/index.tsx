import React from 'react';
import './style.css';

const HomeFooter: React.FC = () => {
  return (
    <div className='home-footer'>
      <div className='home-footer-content'>
        <div className='home-footer-about-us'>
          <h1>关于我们</h1>
          <ul>
            <li><span>&#xe776;</span>微信</li>
            <li><span>&#xe77b;</span>知乎</li>
            <li><span>&#xe75d;</span>bilibili</li>
          </ul>
        </div>
        <div className='home-footer-contact'>
          <h1>联系我们</h1>
          <ul>
            <li><span>&#xe790;</span>地址：前湖校区学生公寓7栋0层</li>
            <li><span>&#xe7de;</span>邮箱：ncuadmin@163.com</li>
            <li><span>&#xe7e3;</span>电话：0791-83969124</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter;
