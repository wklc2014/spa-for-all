'use strict';

import Reflux from 'reflux';

let TodoActions = Reflux.createActions([
    'addItem',
    'deleteItem'
]);

export default TodoActions;