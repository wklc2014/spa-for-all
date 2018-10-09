var fortuneCookies = [
  "北京",
  "上海",
  "天津",
  "成都",
  "重庆",
  "乌鲁木齐",
];

exports.getFortune = function() {
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};