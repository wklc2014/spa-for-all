'use strict';

import Reflux from 'reflux';
import Actions from '../actions/action.js';

import LISTS, {FILTERS} from '../constant/constant.js';
let lists = LISTS;


function retIsAllChecked(datas) {
    let isAllChecked = true;
    datas.some(function (val, idx) {
        if(!val.isChecked){
            isAllChecked = false;
            return true;
        }
    })
    return isAllChecked;
}

let Store = Reflux.createStore({
    items: lists,
    isAllChecked: retIsAllChecked(lists),
    filters: FILTERS,
    listenables: [Actions],
    onDelete(uid, cb){
        this.items = this.items.filter(function (val) {
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
        let _this = this;
        this.items = lists.filter(function (val) {
            let important = params.important == 0 ? true : val["important"] == params.important;
            let status = params.status == 0 ? true : val["status"] == params.status;
            let source = params.source == 0 ? true : val["source"] == params.source;
            let title = params.title == 0 ? true : val["title"].indexOf(params.title) != -1;
            return important && status && source && title;
        })
        this.filters = params;
        this.trigger();
    },
    onEditcheck(uid, checked){
        this.items = this.items.map(function (val, idx) {
            if(val.uid == uid || uid == "ALL"){
                val.isChecked = checked;
            }
            return val;
        })
        this.isAllChecked = retIsAllChecked(this.items);
        this.trigger();
    }
});


export default Store