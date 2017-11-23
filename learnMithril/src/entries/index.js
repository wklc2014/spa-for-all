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

var Hero = ".black.bg-dark-blue.br2.pa3";

m.render(oApp, <Hero>Hello</Hero>);

// m.render(oApp, <Content />);
