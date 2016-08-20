'use strict';

import Reflux from 'reflux';
import TodoActions from '../actions/todo_action.js';

let initialItems = [{
    uid: 1,
    text: "北京"
}, {
    uid: 2,
    text: "成都"
}, {
    uid: 3,
    text: "上海"
}]

let TodoStore = Reflux.createStore({
    items: initialItems,
    listenables: [TodoActions],
    onAddItem: function (data) {
        setTimeout(function () {
            fn_addItem(data);
        }, 100)
    },
    onDeleteItem(uid){
        this.items = this.items.filter(function (val) {
            return val.uid != uid;
        })
        this.trigger(TodoStore.items);
    }
});

function fn_addItem(item) {
    TodoStore.items.push(item);
    TodoStore.trigger(TodoStore.items);
}

export default TodoStore