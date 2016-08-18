'use strict';

import Reflux from 'reflux';
import Actions from '../actions/action.js';

import LISTS, {FILTERS} from '../constant/constant.js';
let lists = LISTS;


function retIsAllChecked(data) {
    let isAllChecked = true;
    data.some(function (val, idx) {
        if(!val.isChecked){
            isAllChecked = false;
            return true;
        }
    })
    return isAllChecked;
}

let isAllChecked = retIsAllChecked(lists);

let Store = Reflux.createStore({
    data: {
        items: lists,
        isAllChecked: isAllChecked,
        filters: FILTERS
    },
    listenables: [Actions],
    onDelete(uid, cb){
        this.data.items = this.data.items.filter(function (val) {
            return val.uid != uid;
        })
        lists = lists.filter(function (val) {
            return val.uid != uid;
        })
        if(cb){
            cb();
        }
        this.trigger();
    },
    onFilter(params){
        this.data.items = lists.filter(function (val) {
            let important = params.important == 0 ? true : val["important"] == params.important;
            let status = params.status == 0 ? true : val["status"] == params.status;
            let source = params.source == 0 ? true : val["source"] == params.source;
            let title = params.title == 0 ? true : val["title"].indexOf(params.title) != -1;
            return important && status && source && title;
        })
        this.data.filters = params;
        this.trigger();
    },
    onEditcheck(uid, checked){
        this.data.items = this.data.items.map(function (val, idx) {
            if(val.uid == uid || uid == "ALL"){
                val.isChecked = checked;
            }
            return val;
        })
        this.data.isAllChecked = retIsAllChecked(this.data.items);
        this.trigger();
    }
});


export default Store