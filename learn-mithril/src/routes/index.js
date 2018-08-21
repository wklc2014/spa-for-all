import m from 'mithril';

import Layout from '../pages/Layout/Layout.jsx';
import Assess from '../pages/Assess/Assess.jsx';
import Secret from '../pages/Assess/Secret.jsx';
import Login from '../pages/Assess/Login.jsx';
import Hello from '../pages/Hello/Hello.jsx';
import Home from '../pages/Home/Home.jsx';

export default {
  '/': {
    render: (vnode) => {
      return m(Layout, m(Home));
    },
  },
  '/login': {
    render: () => {
      return m(Layout, m(Login));
    }
  },
  '/assess': {
    onmatch: function(args, requestedPath) {
      if (!sessionStorage.getItem('auth-token')) {
        m.route.set('/login');
      } else {
        return m(Layout, m(Secret));
      }
    },
  },
  '/help': {
    render: (vnode) => {
      return m(Layout, m(Hello));
    },
  },
}