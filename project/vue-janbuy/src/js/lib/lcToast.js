/**
 * lcToast
 * */
;(function (win, doc) {
	function createDiv(id, zindex) {
		var divEle = doc.createElement("div");
		divEle.className = "lcToast-base";
		divEle.style.zIndex = zindex;
		doc.body.appendChild(divEle);
		return divEle;
	}

	function createNewId() {
		var newid = new Date().getTime();
		return Math.random(1, 99) + newid;
	}

	function extend(target, source) {
		for (var property in source) {
			target[property] = source[property];
		}
		return target;
	}

	var zIndex = 10000;

	var lcToast = function (text, params) {
		if (text == undefined) {
			return;
		}
		var settings = {
			time: 2000,
			position: "center",
			classname: ""
		}
		var options = extend(settings, params);
		var time = Math.max(options.time, 1000);
		var newid = createNewId();
		var box = createDiv(newid, zIndex);
		zIndex++;
		box.innerHTML = text;
		box.className = "lcToast-base " + options.position + " " + options.classname;
		setTimeout(function () {
			box.className = "lcToast-base out " + options.position + " " + options.classname;
		}, time - 200);
		setTimeout(function () {
			doc.body.removeChild(box);
		}, time);
	}
	win.lcToast = lcToast;
}(window, document))