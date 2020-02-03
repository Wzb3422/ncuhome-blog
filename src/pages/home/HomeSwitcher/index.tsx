import React, { useState } from 'react';
import { useMedia } from 'react-use';
import './style.css';

const tabs = ['最新', '研发', '产品', '设计', '漫谈', '家园相关', '代码规范']

const Tabs = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <ul>
    {tabs.map((item, index) => {
      if (index === selectedIndex) {
        return (
          <li
            className='home-switcher-tab-selected'
            key={item}
          >{item}</li>
        )
      } else {
        return (
          <li
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >{item}</li>
        )
      }
    }
    )}
    </ul>
  )
}
  

const HomeSwitcher: React.FC = () => {

  const isWide = useMedia('(min-width: 768px)')

  return (
    <div className='home-switcher'>
      {
        isWide ? <Tabs /> : 
        <div className='home-switcher-box'>
          <Tabs />
        </div>
      }
    
  </div>
  )
  
}

  
export default HomeSwitcher;
