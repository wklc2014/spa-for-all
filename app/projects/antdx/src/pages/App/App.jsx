import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home.jsx';
import ExampleHForm from '../Example/ExampleHForm.jsx';
import ExampleHPicture from '../Example/ExampleHPicture.jsx';
import ExampleWarterMark from '../Example/ExampleWarterMark.jsx';
import ExampleHTagGroup from '../Example/ExampleHTagGroup.jsx';
import Api from '../Api/Index.jsx';
import Antdx from '../../components/index.js';
import exampleConfig from './common/index.js';

const { MainLayout } = Antdx

const App = (props) => {

  const divStyle = {
    padding: 16,
    background: '#fff',
    border: '8px solid #ddd',
  }

  return (
    <MainLayout configs={exampleConfig} title="Antdx">
      <div style={divStyle}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/example/hform" component={ExampleHForm} />
          <Route path="/example/hpicture" component={ExampleHPicture} />
          <Route path="/example/wartermark" component={ExampleWarterMark} />
          <Route path="/example/taggroup" component={ExampleHTagGroup} />
          <Route path="/api" component={Api} />
          <Route path="/help" render={() => <h2>帮助我们</h2>} />
          <Route path="/b" render={() => <h2>Page B</h2>} />
          <Route path="/c" render={() => <h2>Page C</h2>} />
          <Route render={() => <h3>Not Found</h3>} />
        </Switch>
      </div>
    </MainLayout>
  );
}

export default App;

