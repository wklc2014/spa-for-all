import React, { Component } from 'react';

const App = (props) => {
  return (
    <div>
        {props.children}
    </div>
  );
};

App.propTypes = {
};

export default App;
