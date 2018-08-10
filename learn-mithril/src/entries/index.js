import m from 'mithril';
import '../global.js';

import routes from '../routes/';
const oRoot = document.getElementById('root');
m.route(oRoot, "/assess", routes);
