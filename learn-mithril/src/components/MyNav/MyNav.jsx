import m from 'mithril';
import classnames from 'classnames';
import nav from '../../common/config/nav.js';

const MyNav = {
  oninit: (vnode) => {
    // console.log('Hello component oninit');
  },
  view: function (vnode) {
    // console.log('vnode.attrs>>>', vnode.attrs);
    const navEle = nav.map((v, i) => {
      return <a class="nav-link" href={v.path} oncreate={m.route.link}>{v.label}</a>
    })
    return (
      <nav class="nav justify-content-center">
        {navEle}
      </nav>
    );
  }
};

export default MyNav;
