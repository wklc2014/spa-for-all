'use strict';

export let FILTERS = {
	status: 0,
	important: 0,
	source: 0,
	title: 0
}

export let STATUS = [{
	uid: 0,
	text: "全部"
}, {
	uid: 1,
	text: "已采纳"
}, {
	uid: 2,
	text: "未采纳"
}, {
	uid: 3,
	text: "未处理"
}];
export let IMPORTANT = [{
	uid: 0,
	text: "全部"
}, {
	uid: 1,
	text: "一般"
}, {
	uid: 2,
	text: "严重"
}]

export let SOURCE = [{
	uid: 0,
	text: "全部"
}, {
	uid: 1,
	text: "人工"
}, {
	uid: 2,
	text: "职能聚类"
}]

let lists = [{
    title: "北京",
    source: 1,
    important: 1,
    status: 1,
    time: "2016-12-30 12:30:20",
    name: "王大"
}, {
    title: "乌鲁木齐",
    source: 2,
    important: 2,
    status: 3,
    time: "2016-12-30 12:30:20",
    name: "王大"
}, {
    title: "南宁",
    source: 2,
    important: 1,
    status: 2,
    time: "2016-12-30 12:30:20",
    name: "王大"
},{
    title: "广州",
    source: 1,
    important: 2,
    status: 1,
    time: "2016-12-30 12:30:20",
    name: "王大"
}, {
    title: "西安",
    source: 2,
    important: 2,
    status: 1,
    time: "2016-12-30 12:30:20",
    name: "王大"
}, {
    title: "成都",
    source: 1,
    important: 1,
    status: 1,
    time: "2016-12-30 12:30:20",
    name: "王大"
}, {
    title: "上海",
    source: 1,
    important: 1,
    status: 2,
    time: "2016-12-30 12:30:20",
    name: "王大"
}, {
    title: "宁夏回族自治区",
    source: 1,
    important: 2,
    status: 3,
    time: "2016-12-30 12:30:20",
    name: "王大"
}];

lists.map(function (val, idx) {
	val.isChecked = false;
	val.uid = idx + 1;
	return val;
})

export default lists;