import m from 'mithril';

import Layout from '../components/Layout/Layout.jsx';
import Assess from '../components/Assess/Assess.jsx';
import Secret from '../components/Assess/Secret.jsx';
import Login from '../components/Assess/Login.jsx';
import Hello from '../components/Hello/Hello.jsx';

export default {
    "/assess": {
        render: () => {
            return m(Layout, m(Assess));
        },
    },
    "/login": Login,
    "/secret": {
        onmatch: function() {
            if (!localStorage.getItem("auth-token")) {
                m.route.set("/login");
            }
            else return Home
        }
    },
    "/hello": {
        render: () => {
            return m(Layout, m(Hello));
        },
    },
}