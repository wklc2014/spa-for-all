import m from 'mithril';
import '../utils/global.js';
import '../mock/index.js';
import routes from '../routes/';
const oRoot = document.getElementById('root');
m.route(oRoot, '/', routes);
