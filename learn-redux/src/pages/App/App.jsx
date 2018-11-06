import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login/LoginContainer.jsx';
import Home from '../Home/HomeContainer.jsx';
import Help from '../Help/Help.jsx';
import News from '../News/NewsContainer.jsx';
import Secret from '../Secret/Secret.jsx';

import AuthRoute from '../../components/AuthRoute/AuthRoute.jsx';
import MainLayout from '../../lib/MainLayout/MainLayout.jsx';

import sidebarConfig from './common/sidebarConfig.js';

const App = (props) => {
  const { isLogin } = props;
  const hasLogin = isLogin === 'yes';

  return (
    <MainLayout configs={sidebarConfig}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/help" component={Help} />
        <Route path="/news" component={News} />
        <AuthRoute to="/login" auth={hasLogin} path="/secret" component={Secret} />
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </MainLayout>
  );
}

export default App;

