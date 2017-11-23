import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'antd';

import Assess from './Assess.jsx';

export default function App({ children }) {
    return (
        <div>
            <h3>App component</h3>
            <Button>按钮</Button>
            <Route path="/assess" render={Assess} />
        </div>
    )
}
