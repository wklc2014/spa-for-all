var allPaths = require('./configs/allPaths.js');

var plugins = [
  [
    "import", {
      "libraryName": "antd",
      "style": true
    }
  ]
];

if (allPaths.name === 'mithril') {
  plugins.push([
    "transform-react-jsx", {
      "pragma": "m"
    }
  ])
}

module.exports = {
  "presets": [
    "env",
    "react",
    "stage-0"
  ],
  "plugins": plugins,
};