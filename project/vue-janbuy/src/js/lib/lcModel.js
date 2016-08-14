/**
 * lcModel.js
 * */
;(function (win, doc) {
	var bind = function (ele, type, callback) {
		if (ele.addEventListener) {
			return ele.addEventListener(type, callback, false);
		}

		if (ele.attachEvent) {
			return ele.attachEvent('on' + type, callback);
		}

		return false;
	}

	var isMobile = (function () {
		return (window.DocumentTouch && document instanceof window.DocumentTouch) || 'ontouchstart' in window;
	}());

	var eventName = isMobile && win.Zepto ? "tap" : "click";

	var extend = function (target, source) {
		for (var property in source) {
			target[property] = source[property];
		}
		return target;
	}

	var lcModel = {
		event: eventName,
		zIndex: 10000,
		createDiv: function (id) {
			var divEle = doc.createElement("div");
			divEle.id = "lcModel-out-" + id;
			divEle.className = "lcModel-base";
			divEle.style.zIndex = this.zIndex;
			this.zIndex++;
			doc.body.appendChild(divEle);
			return divEle;
		},
		createNewId: function () {
			var newid = new Date().getTime();
			return Math.random(1, 99) + newid;
		},
		build: function (params) {
			var htmlString = "", titleString = "", promptString = "", buttonString = "";

			if (params.type == "prompt") {
				promptString =
					'<div class="lcModel-prompt">' +
					'<input id="lcModel-input-' + params.newid + '" type="text" ' + (params.value ? 'value="' + params.value + '"' : '') + ' placeholder="' + params.placeholder + '" />' +
					'</div>';
			}
			if (params.title) {
				titleString = '<div class="lcModel-head">' + params.title + '</div>';
			}

			if (params.type === "alert") {
				buttonString = '<div class="lcModel-foot">';
				buttonString += '<button id="lcModel-button-alert-ok-' + params.newid + '" class="ok">' + params.ok + '</button>';
			} else if (params.type === 'prompt' || params.type === 'confirm') {
				buttonString = '<div class="lcModel-foot">';
				buttonString +=
					'<button id="lcModel-button-' + params.type + '-ok-' + params.newid + '" class="ok">' + params.ok + '</button>' +
					'<button id="lcModel-button-' + params.type + '-cancel-' + params.newid + '" class="cancel">' + params.cancel + '</button>';
			}
			htmlString =
				'<div class="lcModel-table">' +
				'<div class="lcModel-table-cell">' +
				'<div class="lcModel-bg" id="lcModel-bg-' + params.newid + '"></div>' +
				'<div class="lcModel-content ' + params.classname + '">' +
				titleString +
				'<div class="lcModel-body">' + params.content + '</div>' +
				promptString +
				buttonString +
				'</div>' +
				'</div>' +
				'</div>';

			this.finishbuild(htmlString, params);
		},
		finishbuild: function (htmlString, params) {
			var _this = this;
			var box = this.createDiv(params.newid);
			box.innerHTML = htmlString;
			box.className += " lcModel-" + params.type;
			var maskEle = doc.getElementById('lcModel-bg-' + params.newid);
			if (params.backdrop && maskEle) {
				bind(maskEle, eventName, function () {
					params.callback_close && params.callback_close();
					if(box.className.indexOf("out") == -1){
						_this.destroy(box);
					}
				});
			}
			switch (params.type) {
				case 'alert':
					_this.finishbuildAlert(box, params);
					break;
				case 'confirm':
					_this.finishbuildConfirm(box, params);
					break;
				case 'prompt':
					_this.finishbuildPrompt(box, params);
					break;
					break;
				default:
					throw "Unknown type: " + params.type;
			}
		},
		finishbuildAlert: function (box, params) {
			var _this = this;
			var okEle = doc.getElementById('lcModel-button-alert-ok-' + params.newid);
			bind(okEle, eventName, function () {
				params.callback && params.callback(box);
				_this.destroy(box);
			});
		},
		finishbuildConfirm: function (box, params) {
			var _this = this;
			var okEle = doc.getElementById('lcModel-button-confirm-ok-' + params.newid);
			bind(okEle, eventName, function () {
				params.callback_ok && params.callback_ok(box, true);
				_this.destroy(box);
			});
			var cancelEle = doc.getElementById('lcModel-button-confirm-cancel-' + params.newid);
			bind(cancelEle, eventName, function () {
				params.callback_cancel && params.callback_cancel(box, false);
				_this.destroy(box);
			});
		},
		finishbuildPrompt: function (box, params) {
			var _this = this;
			var inputEle = doc.getElementById('lcModel-input-' + params.newid);
			setTimeout(function () {
				inputEle.focus();
				inputEle.select();
			}, 100);
			var okEle = doc.getElementById('lcModel-button-prompt-ok-' + params.newid);
			bind(okEle, eventName, function () {
				params.callback_ok && params.callback_ok(box, inputEle.value);
				_this.destroy(box);
			});
			var cancelEle = doc.getElementById('lcModel-button-prompt-cancel-' + params.newid);
			bind(cancelEle, eventName, function () {
				params.callback_cancel && params.callback_cancel(box, false);
				_this.destroy(box);
			});
		},
		destroy: function (box) {
			box.className += " out";
			setTimeout(function () {
				box.className += " animate";
			}, 200)
			setTimeout(function () {
				doc.body.removeChild(box);
			}, 400)
		},
		alert: function (content, params) {
			if (typeof params !== "object") {
				params = false;
			}
			var newid = this.createNewId();
			var options = extend({
				title: false,
				classname: "",
				backdrop: true,
				duration: 3000,
				ok: "确定",
				callback_close: null,
				callback: null
			}, params);
			options["type"] = "alert";
			options["content"] = content;
			options["newid"] = newid;
			this.build(options);
		},
		confirm: function (content, params) {
			if (typeof params !== "object") {
				params = false;
			}
			var newid = this.createNewId();
			var options = extend({
				title: false,
				classname: "",
				backdrop: true,
				duration: 3000,
				ok: "确定",
				cancel: "取消",
				callback_close: null,
				callback_ok: null,
				callback_cancel: null,
				placeholder: ""
			}, params);
			options["type"] = "confirm";
			options["content"] = content;
			options["newid"] = newid;
			this.build(options);
		},
		prompt: function (content, params) {
			if (typeof params !== "object") {
				params = false;
			}
			var newid = this.createNewId();
			var options = extend({
				title: false,
				classname: "",
				backdrop: true,
				duration: 3000,
				ok: "确定",
				cancel: "取消",
				callback_close: null,
				callback_ok: null,
				callback_cancel: null,
				placeholder: ""
			}, params);
			options["type"] = "prompt";
			options["content"] = content;
			options["newid"] = newid;
			this.build(options);
		}
	}
	win.lcModel = lcModel;
}(window, document))

