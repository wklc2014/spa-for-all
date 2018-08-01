import m from 'mithril';
import MyNav from '../../components/MyNav/MyNav.jsx';

const Layout = {
  view: function(vnode) {
    const MyNavProps = {
      a: 1,
      b: 2,
    }

    return (
      <section class="container">
        <MyNav {...MyNavProps} />
        <div style={{ padding: 20 }}>
          {vnode.children}
        </div>
      </section>
    );
  }
}

export default Layout;
