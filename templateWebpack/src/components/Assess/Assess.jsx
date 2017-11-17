import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import AssessMan from '../components/Assess/AssessMan.jsx';
import AssessHelp from '../components/Assess/AssessHelp.jsx';

export default function Assess({}) {
    return (
        <section>
            <h3>this is assess page</h3>
            <ul>
                <li>
                    <Link to="/assess/man">AssessMan</Link>
                </li>
                <li>
                    <Link to="/assess/help">AssessHelp</Link>
                </li>
            </ul>
            <Route path="/assess/man" expact component={AssessMan} />
            <Route path="/assess/help" expact component={AssessHelp} />
        </section>
    )
}