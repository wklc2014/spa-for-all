import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login/Index.jsx';
import Home from '../Home/Index.jsx';
import About from '../About/Index.jsx';
import News from '../News/Index.jsx';
import Nav from './Nav.jsx';
import NoMatch from './NoMatch.jsx';
import AuthRoute from './AuthRoute.jsx';

const App = (props) => {
  const { isLogin } = props;

  return (
    <div>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
          <AuthRoute to="/login" auth={!isLogin}>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
          </AuthRoute>
        </Switch>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  };
}

export default withRouter(connect(mapStateToProps)(App));
