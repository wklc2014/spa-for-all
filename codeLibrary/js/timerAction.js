/**
 * 延时执行
 */
import is from 'is_js';

export default function timerAction(fn, condition, delay = 1000) {
  let _timer = null;

  if (is.not.function(fn)) return;

  let times = 0;

  function _fn() {
    times += 1;

    let status = 'continue';
    if (is.string(condition) && !!condition) {
      status = 'start';
    } else if (is.function(condition) && !!condition()) {
      status = 'start';
    }

    if (status === 'start') {
      fn();
      window.clearTimeout(_timer);
      return;
    }

    if (times <= 10 && status === 'continue') {
      window.setTimeout(_fn, delay);
    }
  }

  _fn();
}