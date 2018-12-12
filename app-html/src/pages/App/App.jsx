import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home.jsx';
import Business from '../Business/IndexContainer.jsx';
import Project from '../Project/IndexContainer.jsx';
import News from '../News/News.jsx';
import Contact from '../Contact/Contact.jsx';

const App = (props) => {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/business" component={Business} />
        <Route path="/project" component={Project} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    </div>
  );
}

export default App;

