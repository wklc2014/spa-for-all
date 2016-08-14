'use strict';

export default{
	handleTips(text, time){
		if(!text) return;
		if(time == undefined){
			time = 1000;
		}
		lcModel.toast(text, {
			time: time
		});
	},
	handleDevelope(){
		this.handleTips("开发中...");
	}
}