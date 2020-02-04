import React, { Suspense, lazy } from 'react';
import { useMedia } from 'react-use';

const HomeHeader = lazy(() => import('./HomeHeader'));
const HomeBanner = lazy(() => import('./HomeBanner'));
const HomeSwitcher = lazy(() => import('./HomeSwitcher'));
const HomeNoteList = lazy(() => import('./HomeNoteList'));
const HomeFooter = lazy(() => import('./HomeFooter'));

const Home: React.FC = () => {

  const isWide = useMedia('(min-width: 768px)')

  return (
    <>
      {isWide && <HomeHeader />}
      <HomeBanner />
      <HomeSwitcher />
      <HomeNoteList />
      <HomeFooter />
    </>
  )
}

export default Home;
