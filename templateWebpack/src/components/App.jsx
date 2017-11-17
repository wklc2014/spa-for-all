import React from 'react';
import { Link } from 'react-router-dom';

export default function App({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/assess">Assess</Link>
                </li>
                <li>
                    <Link to="/example">Example</Link>
                </li>
            </ul>
            <div>
                { children }
            </div>
        </div>
    )
}
