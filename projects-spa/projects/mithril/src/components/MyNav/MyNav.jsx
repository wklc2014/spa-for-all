import m from 'mithril';
import classnames from 'classnames';
import nav from '../../common/config/nav.js';

const MyNav = {
  oncreate: (vnode) => {
    const element = layui.element;
    element.render();
  },
  view: function (vnode) {
    // console.log('vnode.attrs>>>', vnode.attrs);
    const navEle = nav.map((v, i) => {
      const path = m.route.get();
      const cls = path === v.path ? 'layui-nav-item layui-this' : 'layui-nav-item';
      return (
        <li class={cls}>
          <a href={v.path} oncreate={m.route.link}>{v.label}</a>
        </li>
      )
    })
    return <ul class="layui-nav" lay-filter="mynav">{navEle}</ul>
  }
};

export default MyNav;
