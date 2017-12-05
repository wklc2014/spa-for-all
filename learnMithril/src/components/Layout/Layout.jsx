import m from 'mithril';

const Layout = {
    view: function(vnode) {
        return (
            <section>
                <ul>
                    <li><a href="#!/assess">Assess</a></li>
                    <li><a href="#!/hello">Hello</a></li>
                    <li><a href="#!/secret">Secret</a></li>
                </ul>
                <div style={{ padding: 20 }}>
                    {vnode.children}
                </div>
            </section>
        );
    }
}

export default Layout;
