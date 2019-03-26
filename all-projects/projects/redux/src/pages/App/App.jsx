import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/LoginContainer.jsx';
import Home from '../Home/HomeContainer.jsx';
import News from '../News/NewsContainer.jsx';
import Secret from '../Secret/Secret.jsx';
import AuthRoute from '../../components/AuthRoute/AuthRoute.jsx';
import Antdx from '../../components/antdx.js';
import sidebarConfig from './common/sidebarConfig.js';

const { MainLayout } = Antdx;

const App = (props) => {
  const { isLogin } = props;
  const hasLogin = isLogin === 'yes';

  return (
    <MainLayout configs={sidebarConfig}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/help" render={() => <h2>帮助我们</h2>} />
        <Route path="/news" component={News} />
        <Route path="/a" render={() => <h2>Page A</h2>} />
        <Route path="/b" render={() => <h2>Page B</h2>} />
        <Route path="/c" render={() => <h2>Page C</h2>} />
        <AuthRoute
          to="/login"
          auth={hasLogin}
          path="/secret"
          component={Secret}
        />
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </MainLayout>
  );
}

export default App;

