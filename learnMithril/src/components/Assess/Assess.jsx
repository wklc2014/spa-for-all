import m from 'mithril';

var state = {
    uid: "",
    setURL: function(uid) {
        console.log(uid)
        state.uid = uid;
    },
    setAction: function (e) {
        console.log(e)
        console.log(this)
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}

export default {
    view: function (vnode) {
        return (
            <section>
                <h3>My First Mithril component</h3>
                <div
                    class="parent"
                    style={{ padding: '10px 0' }}
                    onclick={m.withAttr('style', state.setURL)}
                >
                    <p class="child">第一行代码</p>
                    <p class="child">第二行代码</p>
                    <p>
                        <button
                            onclick={state.setAction}
                        >
                            按钮
                        </button>
                    </p>
                    <p>{`点击的执行 ID 是${state.uid}`}</p>
                </div>
            </section>
        );
    }
};
