'use strict';

import { Dispatcher } from 'flux';
import ListStore from '../stores/ListStore.js';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
            // no op
    }
})

export default AppDispatcher;
