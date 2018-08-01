import m from 'mithril';

import Layout from '../pages/Layout/Layout.jsx';
import Assess from '../pages/Assess/Assess.jsx';
import Secret from '../pages/Assess/Secret.jsx';
import Login from '../pages/Assess/Login.jsx';
import Hello from '../pages/Hello/Hello.jsx';

export default {
  "/assess": {
    render: () => {
      return (
        <Layout>
          <Assess />
        </Layout>
      )
    },
  },
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