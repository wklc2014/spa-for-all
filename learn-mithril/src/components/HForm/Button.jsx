import m from 'mithril';

const Button = {
  view: function (vnode) {
    const { attrs, children = '按钮' } = vnode;
    return (
      <div className="ui button icon">
        123
      </div>
    )
  }
}

export default Button;
