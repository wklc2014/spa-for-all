import m from 'mithril';

const oApp = document.getElementById('app');

const Content = {
    view: function (vnode) {
        return (
            <main>
                <h1 class="title">My first app</h1>
                <button>A button</button>
            </main>
        )
    }
}

m.render(oApp, <Content />);
