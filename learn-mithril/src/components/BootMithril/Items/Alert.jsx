import m from 'mithril';
import classnames from 'classnames';
import is from 'is_js';

const alertTypes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const Close = {
  view: function (vnode) {
    return (
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }
}

const Alert = {
  view: function (vnode) {
    const { attrs = {}, children } = vnode;
    const {
      type = 'primary',
      closable = false,
    } = attrs;

    const isRightType = is.inArray(type, alertTypes);

    const clsArr = ['alert'];
    if (type && isRightType) {
      clsArr.push(`alert-${type}`);
    } else {
      console.warn(`错误的 type 参数: ${type}`);
    }

    const cls = clsArr.join(' ');

    return (
      <div class={cls} role="alert">
        {closable && <Close />}
        {children}
      </div>
    )
  }
}

/**
 * Alert props
 * type
 * closable
 */

export default Alert;
