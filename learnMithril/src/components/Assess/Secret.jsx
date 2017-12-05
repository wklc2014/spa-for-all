import m from 'mithril';

const Secret = {
    oninit: (vnode) => {

    },
    view: function (vnode) {
        return (
            <div>这是秘密，只有登录用户才能看到</div>
        );
    }
};

export default Secret;
