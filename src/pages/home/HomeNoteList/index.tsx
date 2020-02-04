import React, { Suspense, lazy } from 'react';
import './style.css';

const HomeNoteItem = lazy(() => import('./HomeNoteItem'));

const HomeNoteList = () => {

  return (
    <div className='home-note-list'>
      <HomeNoteItem />
      <HomeNoteItem />
      <HomeNoteItem />
      <HomeNoteItem />
      <HomeNoteItem />
    </div>
  )
}

export default HomeNoteList;
