import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <div>123</div>
  )
}

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);