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
    // "/login": Login,
    "/login": {
        render: () => {
            return m(Layout, m(Login));
        }
    },
    "/secret": {
        onmatch: function() {
            if (!sessionStorage.getItem("auth-token")) {
                m.route.set("/login");
            } else {

            }
        },
        render: function () {
            return m(Layout, m(Secret));
        }
    },
    "/hello": {
        render: (vnode) => {
            return m(Layout, m(Hello));
        },
    },
}