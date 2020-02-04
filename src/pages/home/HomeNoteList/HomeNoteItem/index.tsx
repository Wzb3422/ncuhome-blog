import React from 'react';
import './style.css';

const HomeNoteItem = () => {
  return (
    <div className='home-note-item'>
      <div className='home-note-item-info'>
        <h2>Ant Design | 设计资产的秩序之美</h2>
        <p>Hi，大家好！我是吾笙。非常荣幸在2020年的第一个周六，参加了第三届 SEE Conf 大会。在会上，我给大家分享了这一年来团队为设计资产升级所做的事情、总结的方法以及成果。希望通过这套方法和资产能够赋能给更多的用户，提高设计生产效率的同时，更好的保障产品体验的内在一致性。</p>
        <div className='home-note-meta'>
          <div>
            <h4>研发 Asuka</h4>
            <h5>Mar 14, 2019</h5>
          </div>
          <div className='home-note-item-flag'>&#xe6a8;</div>
        </div>
      </div>
      <div className='home-note-item-img' style={{backgroundImage: 'url("/assets/img/dog.jpg")'}}>
      </div>
    </div>
  )
}

export default HomeNoteItem;
