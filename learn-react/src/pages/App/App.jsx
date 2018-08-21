import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login/IndexContainer.jsx';
import Home from '../Home/IndexContainer.jsx';
import About from '../About/Index.jsx';
import News from '../News/IndexContainer.jsx';
import Nav from './Nav.jsx';
import NoMatch from './NoMatch.jsx';
import AuthRoute from './AuthRoute.jsx';

const App = (props) => {
  const { isLogin } = props;

  return (
    <div style={{ padding: 16 }}>
      <Nav />
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <AuthRoute to="/login" auth={isLogin} exact path="/" component={Home} />
          <AuthRoute to="/login" auth={isLogin} path="/news" component={News} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
