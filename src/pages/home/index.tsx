import React, { Suspense, lazy } from 'react';
import { useMedia } from 'react-use';

const HomeHeader = lazy(() => import('./HomeHeader'));
const HomeBanner = lazy(() => import('./HomeBanner'));
const HomeSwitcher = lazy(() => import('./HomeSwitcher'));
const HomeNoteList = lazy(() => import('./HomeNoteList'));

const Home: React.FC = () => {

  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <HomeSwitcher />
      <HomeNoteList />
    </>
  )
}

export default Home;
