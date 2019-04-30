import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/LoginContainer.jsx';
import Home from '../Home/HomeContainer.jsx';
import News from '../News/NewsContainer.jsx';
import Secret from './Secret.jsx';
import AuthRoute from '../../components/AuthRoute/AuthRoute.jsx';
import Antdx from '../../components/antdx.js';
import sidebarConfig from './common/sidebarConfig.js';

const { MainLayout } = Antdx;

const App = (props) => {
  const { isLogin } = props;
  const hasLogin = isLogin === 'yes';
  const divStyle = {
    padding: 16,
    background: '#fff',
    border: '8px solid #ddd',
  }

  return (
    <MainLayout configs={sidebarConfig} title="learn reflux">
      <div style={divStyle}>
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
            path="/secret-inline"
            render={() => <h2>简单的页面 - 只有登录了才能看到这个页面</h2>}
          />
          <AuthRoute
            to="/login"
            auth={hasLogin}
            path="/secret"
            component={Secret}
          />
          <Route render={() => <h2>Not Found</h2>} />
        </Switch>
      </div>
    </MainLayout>
  );
}

export default App;

