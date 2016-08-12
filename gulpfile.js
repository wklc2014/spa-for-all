'use strict';
var gulp = require("gulp");

var gulp_postcss = require("gulp-postcss");
var postcss_cssnext = require('postcss-cssnext');
var gulp_cssnano = require('gulp-cssnano');

var gulp_plumber = require("gulp-plumber");
var gulp_compass = require("gulp-compass");
var gulp_sourcemaps = require("gulp-sourcemaps");

var gulp_useref = require("gulp-useref");
var gulp_if = require("gulp-if");
var gulp_uglify = require("gulp-uglify");
var gulp_clean_css = require("gulp-clean-css");
var gulp_htmlmin = require("gulp-htmlmin");


var gulp_imagemin = require("gulp-imagemin");
var gulp_cache = require("gulp-cache");
var imagemin_pngquant = require("imagemin-pngquant");
var gulp_size = require('gulp-size');
var gulp_rename = require('gulp-rename');
var gulp_util = require('gulp-util');
var gulp_rimraf = require('gulp-rimraf');

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

var browserSync = require("browser-sync");
var reload = browserSync.reload;

var settings = require("./setting.js");
var webpack_config = require("./webpack.config.js");

/**
 * vue-loader install some module
 npm install vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015 babel-runtime --save-dev
 */

// gulp task html:dev
gulp.task("html_useref:dev", function () {
	return gulp.src(settings.html.src)
		.pipe(gulp_useref())
		.pipe(gulp_if('*.js', gulp_uglify()))
		.pipe(gulp_if('*.css', gulp_clean_css()))
		.pipe(gulp.dest(settings.html.dist));
})

gulp.task("html:dev", ["html_useref:dev"], function () {
	return gulp.src(settings.html.dist + "index.html")
		.pipe(gulp_htmlmin({
			removeComments: true, //清除HTML注释
			collapseWhitespace: true, //压缩HTML
			minifyJS: true, //压缩页面JS
			minifyCSS: true //压缩页面CSS
		}))
		.pipe(gulp.dest(settings.html.dist));
})
// gulp task style:dev
gulp.task("style:dev", function () {
	var processors = [
		postcss_cssnext({
			browsers: "> 0.01%"
		})
	];
    return gulp.src(settings.sass.src)
        .pipe(gulp_plumber({
            errorHandler: function (error) {
            	console.log(error);
                this.emit("end");
            }
        }))
        .pipe(gulp_compass({
            config_file: settings.compass.config,
            css: settings.compass.css,
            sass: settings.compass.sass,
            style: "expanded",
            comments: true
        }))
        .pipe(gulp_postcss(processors))
        .pipe(gulp_cssnano({
			core: false,
			mergeRules: true
		}))
        .pipe(gulp_rename(settings.css.dist_name))
        .pipe(gulp.dest(settings.css.dist))
        .pipe(reload({
            stream: true
        }));
});


// gulp task image:dev
gulp.task("image:dev", function () {
	return gulp.src(settings.image.src)
		.pipe(gulp_cache(gulp_imagemin({
			progressive: true,
			interlaced: true,
			use: [imagemin_pngquant()]
		})))
		.pipe(gulp.dest(settings.image.dist))
		.pipe(gulp_size());
});

// gulp task font:dev
gulp.task("font:dev", function () {
	if (settings.font.src.length) {
		return gulp.src(settings.font.src)
			.pipe(gulp.dest(settings.font.dist));
	}
});

// gulp task webpack:dev
gulp.task("webpack:dev", function () {
	// modify some webpack config options
	webpack_config.entry.app.unshift(
		// "webpack-dev-server/client?http://" + settings.server.host + ":" + settings.server.port + "/",
		"webpack/hot/dev-server"
	);
	webpack_config.plugins.push(
		new OpenBrowserPlugin({
			url: 'http://' + settings.server.host + ':' + settings.server.port
		}),
		new webpack.HotModuleReplacementPlugin()
	)
	var myConfig = Object.create(webpack_config);
	myConfig.devtool = "sourcemap";
	myConfig.debug = true;
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		// server and middleware options
		contentBase: settings.server.root,
		hot: true,
		inline: true,
		stats: {
			colors: true
		},
		historyApiFallback: true,
		publicPath: myConfig.output.publicPath
	}).listen(settings.server.port, settings.server.host, function (err) {
		if (err) {
			throw new gulp_util.PluginError("webpack-dev-server", err);
		}
		// Server listening
		gulp_util.log("[webpack-dev-server]", "http://" + settings.server.host + ":" + settings.server.port + "\n");
	});
});

// gulp task dev
gulp.task("dev", ["webpack:dev", "style:dev", "html:dev", "image:dev", "font:dev"], function () {
	gulp.watch(settings.sass.src, ["style:dev"]);
	gulp.watch(settings.html.src, ["html:dev"]);
	gulp.watch(settings.image.src, ["image:dev"]);
})

// gulp task browser-sync
gulp.task('browser-sync:static', function () {
	browserSync.init({
		server: {
			baseDir: [settings.static.root],
			directory: settings.server.directory
		},
		port: settings.server.port,
		open: settings.server.open,
		notify: settings.server.notify,
		browser: settings.server.browser,
		startPath: settings.static.start
	});
});

// gulp task static
gulp.task("static", ["browser-sync:static"], function () {
	gulp.watch(settings.less.src, ['less:dev']);
})

// gulp task clean
gulp.task("clean", function () {
	return gulp.src([
		settings.html.dist,
		settings.compass.css
	], {
		read: false
	})
		.pipe(gulp_rimraf({
			force: true
		}));
});

// gulp task style:build
gulp.task("style:build", function () {
	var processors = [
		postcss_cssnext({
			browsers: "> 0.01%"
		})
	];
    return gulp.src(settings.sass.src)
        .pipe(gulp_compass({
            config_file: settings.compass.config,
            css: settings.compass.css,
            sass: settings.compass.sass,
            style: "compressed",
            comments: false
        }))
        .pipe(gulp_postcss(processors))
        .pipe(gulp_cssnano({
			core: false,
			mergeRules: true
		}))
        .pipe(gulp_rename(settings.css.dist_name))
        .pipe(gulp.dest(settings.css.dist));
});

// gulp task webpack:build
gulp.task("webpack:build", function () {
	var myConfig = Object.create(webpack_config);
	webpack(myConfig, function (err, stats) {
		if (err) throw new gulp_util.PluginError("webpack:build", err);
		gulp_util.log("[webpack:build]", stats.toString({
			colors: true
		}));
	});
});

// gulp task image:build
gulp.task("image:build", ["image:dev"]);

// gulp task html:build
gulp.task("html:build", ["html:dev"]);

// gulp task font:build
gulp.task("font:build", ["font:dev"]);

// gulp task browser-sync:build
gulp.task('browser-sync:build', function () {
	browserSync.init({
		server: {
			baseDir: [settings.server.root],
			directory: true
		},
		port: settings.server.port,
		open: true,
		notify: false,
		browser: "chrome"
	});
});

// gulp task build
gulp.task("build", ["webpack:build", "html:build", "image:build", "font:build", "style:build"]);
