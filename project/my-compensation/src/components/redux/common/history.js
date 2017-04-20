import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store/configureStore.js';

const history = syncHistoryWithStore(hashHistory, store);

// history.listen(location => {

// })

export default history;
