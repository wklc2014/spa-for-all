import m from 'mithril';

import { Alert } from '../../components/BootMithril/index.js';

const Hello = {
  oninit: (vnode) => {
    // console.log('Hello component oninit');
  },
  view: function (vnode) {
    return (
      <div>
        <h3>Help</h3>
        <div>
          <Alert type="success" closable>
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </Alert>
        </div>
      </div>
    );
  }
};

export default Hello;
