'use strict';

import React from 'react';
import {render} from 'react-dom';
import routeJS from './route.jsx';
import '../../../../node_modules/antd/dist/antd.min.css';
const oApp = document.getElementById("app");

render(routeJS, oApp);