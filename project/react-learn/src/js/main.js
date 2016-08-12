'use strict';
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from './stores/configureStore'
import route from "./route.jsx";
const oApp = document.getElementById("app");
const store = configureStore();

import DefaultView from "./view/page/DefaultView.jsx";

const root = (
	<Provider store={store} key="provider">
		<route/>
	</Provider>
)

// render(root, oApp);
render(route, oApp);
