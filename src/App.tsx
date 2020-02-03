import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Article = lazy(() => import('./pages/article'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/article'>
            <Article />
          </Route>
          <Route>
            <div>返回<Link to='/'>首页</Link></div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
