import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home.jsx';

const App = (props) => {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" render={() => <h3>Test</h3>} />
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </div>
  );
}

export default App;

