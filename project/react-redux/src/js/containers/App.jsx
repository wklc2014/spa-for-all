'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './Counter_container.js';
import configureStore from '../store/configureStore.js'

const store = configureStore()

const App = (
	<Provider store={store}>
		<div className="container">
			<CounterContainer />
		</div>
	</Provider>
)

export default App;