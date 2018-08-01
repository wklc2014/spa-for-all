import m from 'mithril';

const Layout = {
  view: function(vnode) {
    const links = [
    { href: 'login', label: 'Login' },
    { href: 'assess', label: 'Assess' },
    { href: 'hello', label: 'Hello' },
    { href: 'secret', label: 'Secret' },
  ];

  const linkEle = links.map((v, i) => {
    return (
      <li key={i}>
        <a href={`/${v.href}`} oncreate={m.route.link}>{v.label}</a>
      </li>
      )
  });

    return (
      <section>
        <ul>{linkEle}</ul>
        <div style={{ padding: 20 }}>
          {vnode.children}
        </div>
      </section>
    );
  }
}

export default Layout;
