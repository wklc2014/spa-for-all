import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login/LoginContainer.jsx';
import Home from '../Home/HomeContainer.jsx';
import News from '../News/NewsContainer.jsx';

import AuthRoute from '../../components/AuthRoute/AuthRoute.jsx';
import MainLayout from '../../components/MainLayout/MainLayout.jsx';

import sidebarConfig from './common/sidebarConfig.js';

const App = (props) => {
  const { isLogin } = props;
  const hasLogin = isLogin === 'yes';

  return (
    <MainLayout sideMenus={sidebarConfig}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/help" render={() => <h2>帮助我们</h2>} />
        <Route path="/news" component={News} />
        <AuthRoute
          to="/login"
          auth={hasLogin}
          path="/secret"
          render={() => <h2>只有登录了才能看到这个页面</h2>}
        />
        <Route render={() => <h2>Not Found</h2>} />
      </Switch>
    </MainLayout>
  );
}

export default App;

