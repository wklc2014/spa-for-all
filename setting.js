'use strict';

let PROJECT = "project/"
// let curent_project = "vue-janbuy/";
// let curent_project = "vue-learn/";
// let curent_project = "react-learn/";
let curent_project = "react-redux/";
// let curent_project = "react-test/";
// let curent_project = "react-flux/";

module.exports = {
	server: {
		host: "localhost",
		root: PROJECT +  curent_project + "dist/",
		port: 8901,
		browser: "chrome",
		open: true,
		notify: false,
		directory: true
	},
	static: {
		root: PROJECT +  curent_project + "src/",
		start: PROJECT +  curent_project + "static/"
	},
	html: {
		src: PROJECT +  curent_project + "src/index.html",
		dist: PROJECT +  curent_project + "dist/"
	},
	sass: {
		src: [PROJECT +  curent_project + "src/sass/**/*.scss", PROJECT +  curent_project + "src/sass/*.scss"],
		dist: PROJECT +  curent_project + "src/css/"
	},
	compass: {
		sass: PROJECT +  curent_project + "src/sass",
		css: PROJECT +  curent_project + "src/css",
		config: PROJECT +  curent_project + "config.rb"
	},
	image: {
		src: [PROJECT +  curent_project + "src/img/*", PROJECT +  curent_project + "src/img/**/*"],
		dist: PROJECT +  curent_project + "dist/asset/img"
	},
	css: {
		dist: PROJECT +  curent_project + "dist/asset/css/",
		dist_name: "main.css",
	},
	js: {
		src: PROJECT +  curent_project + "src/js/main.js",
		dist: PROJECT +  curent_project + "dist/asset/js",
		dist_name: "main.js",
		public: "/asset/js/"
	},
	font: {
		src: [
			"bower_components/bootstrap/dist/fonts/*"
		],
		dist: PROJECT +  curent_project + "dist/asset/fonts/"
	}
};