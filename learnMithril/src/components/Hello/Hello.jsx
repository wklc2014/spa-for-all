import m from 'mithril';

const Hello = {
    oninit: (vnode) => {
        // console.log('Hello component oninit');
    },
    view: function (vnode) {
        return (
            <div>Hello Mithril</div>
        );
    }
};

export default Hello;
