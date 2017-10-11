const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
    path.resolve(__dirname, 'node_modules/antd-mobile/lib/icon/style/assets/')
    // path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
];



export default {
    entry: "src/entries/*.js",
    svgSpriteLoaderDirs: svgSpriteDirs,
    theme: "./theme.config.js",
    "extraBabelPlugins": [
        "transform-runtime", [
            "import",
            { "libraryName": "antd-mobile", 'libraryDirectory': 'lib', "style": true }
        ]
    ],
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 100,
            propWhiteList: [],
        }),
    ],
    "env": {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr"
            ]
        }
    },
    "dllPlugin": {
        "exclude": [
            "babel-runtime"
        ],
        "include": [
            "dva/router",
            "dva/saga",
            "dva/fetch"
        ]
    }
}
