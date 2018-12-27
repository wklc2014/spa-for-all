import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home.jsx';
import ExampleHForm from '../Example/ExampleHForm.jsx';
import MainLayout from '../../lib/MainLayout/MainLayout.jsx';
import exampleConfig from '../../lib/MainLayout/exampleConfig/exampleConfig.js';

const App = (props) => {

  return (
    <MainLayout configs={exampleConfig}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/example/hform" component={ExampleHForm} />
        <Route path="/help" render={() => <h2>帮助我们</h2>} />
        <Route path="/b" render={() => <h2>Page B</h2>} />
        <Route path="/c" render={() => <h2>Page C</h2>} />
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </MainLayout>
  );
}

export default App;

