import m from 'mithril';
import '../global.js';
import '../global.less';

import routes from '../routes/';
const oRoot = document.getElementById('root');
m.route(oRoot, "/assess", routes);
