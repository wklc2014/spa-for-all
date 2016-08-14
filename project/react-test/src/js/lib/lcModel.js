/**
 * lcModel.js
 * */
;(function (win, doc) {
		var isMobile = (win.DocumentTouch && doc instanceof win.DocumentTouch) || 'ontouchstart' in win,
			eventName = isMobile && win.Zepto ? "tap" : "click";

		function bind(ele, type, callback) {
			if (ele.addEventListener) {
				return ele.addEventListener(type, callback, false);
			}
			if (ele.attachEvent) {
				return ele.attachEvent('on' + type, callback);
			}
			return false;
		}

		function extend(source, properties) {
			var ret = {};
			for (var i in source) {
				ret[i] = source[i];
			}
			for (var property in properties) {
				ret[property] = properties[property];
			}
			return ret;
		}

		var DEFAULTS = {
			type: "alert",
			title: "提示",
			content: "",
			classname: "",
			animate: "zoom",
			mask: true,
			backdrop: true,
			duration: false,
			placeholder: "",
			focus: true,
			select: true,
			ok: "确定",
			no: "取消",
			cb_close: null,
			cb_ok: null,
			cb_no: null
		};

		var lcModel = {
			event: eventName,
			isMobile: isMobile,
			zIndex: 10000,
			createDiv: function (id) {
				var divEle = doc.createElement("div");
				divEle.id = "lcModel" + id;
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
				var htmlString = "", headString = "", bodyString = "", footString = "", promptString = "";
				var okButtons = '<button id="lcModel-button-' + params.type + '-ok-' + params.newid + '" class="ok">' + params.ok + '</button>';
				var cancelButtons = '<button id="lcModel-button-' + params.type + '-no-' + params.newid + '" class="no">' + params.no + '</button>';

				if (params.title) {
					headString += '<div class="lcModel-content-head">' + params.title + '</div>';
				}

				bodyString += '<div class="lcModel-content-body">' + params.content + '</div>';

				switch (params.type) {
					case "alert":
						footString += '<div class="lcModel-content-foot">' + okButtons + '</div>';
						break;
					case "confirm":
						footString += '<div class="lcModel-content-foot">' + okButtons + cancelButtons + '</div>';
						break;
					case "prompt":
						footString += '<div class="lcModel-content-foot">' + okButtons + cancelButtons + '</div>';
						promptString += '<div class="lcModel-content-prompt">';
						promptString += '<input id="lcModel-content-input-' + params.newid + '" type="text" ' + (params.value ? 'value="' + params.value + '"' : '') + ' placeholder="' + params.placeholder + '" />';
						promptString += '</div>';
						break;
					default:

						break;
				}
				htmlString += '<div class="lcModel-table">';
				htmlString += '<div class="lcModel-table-cell">';
				params.mask && (htmlString += '<div class="lcModel-mask" id="lcModel-mask-' + params.newid + '"></div>');
				htmlString += '<div class="lcModel-content ' + params.classname + '">' + headString + bodyString + promptString + footString + '</div>';
				htmlString += "</div>";
				htmlString += "</div>";
				this.finishbuild(htmlString, params);
			},
			finishbuild: function (htmlString, params) {
				var _this = this;
				var box = this.createDiv(params.newid);
				box.innerHTML = htmlString;
				box.className += " lcModel-" + params.type + " " + params.animate;

				var maskEle = doc.getElementById('lcModel-mask-' + params.newid);
				if (params.mask && params.backdrop && maskEle) {
					bind(maskEle, eventName, function () {
						params.cb_close && params.cb_close(box);
						if (box.className.indexOf("out") == -1) {
							_this.close(box);
						}
					});
				}

				var inputEle = doc.getElementById('lcModel-content-input-' + params.newid);
				var cb_argument = inputEle ? inputEle.value : "";
				if (inputEle) {
					setTimeout(function () {
						params.focus && inputEle.focus();
						params.select && inputEle.select();
					}, 100);
				}

				var okBtnEle = doc.getElementById('lcModel-button-' + params.type + '-ok-' + params.newid);
				if (okBtnEle) {
					bind(okBtnEle, eventName, function () {
						if (params.cb_ok) {
							params.cb_ok(box, true, cb_argument);
						} else {
							_this.close(box);
						}
					});
				}

				var noBtnEle = doc.getElementById('lcModel-button-' + params.type + '-no-' + params.newid);
				if (noBtnEle) {
					bind(noBtnEle, eventName, function () {
						if (params.cb_no) {
							params.cb_no(box, false, cb_argument);
						} else {
							_this.close(box);
						}
					});
				}
			},
			close: function (box, remove) {
				if (remove) {
					doc.body.removeChild(box);
				} else {
					box.className += " out";
					setTimeout(function () {
						doc.body.removeChild(box);
					}, 200)
				}
			},
			open: function (options) {
				var newid = this.createNewId();
				var params = extend(DEFAULTS, options);
				params.newid = newid;
				this.build(params);
			},
			alert: function (content, options) {
				var params = extend({
					content: content,
					type: "alert"
				}, options);
				this.open(params);
			},
			confirm: function (content, options) {
				var params = extend({
					content: content,
					type: "confirm"
				}, options);
				this.open(params);
			},
			prompt: function (content, options) {
				var params = extend({
					content: content,
					type: "prompt"
				}, options);
				this.open(params);
			},
			toast: function (text, params) {
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
				var newid = this.createNewId();
				var box = this.createDiv(newid, this.zIndex);
				this.zIndex++;
				box.innerHTML = text;
				box.className = "lcToast-base " + options.position + " " + options.classname;
				setTimeout(function () {
					box.className = "lcToast-base out " + options.position + " " + options.classname;
				}, time - 200);
				setTimeout(function () {
					doc.body.removeChild(box);
				}, time);
			}
		}
		win.lcModel = lcModel;
	}
	(window, document)
)

