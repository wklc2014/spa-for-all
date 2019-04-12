function appStart(params) {
  var localUrl = window.location.href.split('#')[0];
  var jsApiList = params.jsApiList;
  var callback = params.callback;
  $.ajax({
    url: 'http://www.wangkun123.top/wx/wechat_signature/getSignature.php',
    type: 'post',
    dataType: "json",
    data: { url: localUrl },
    success: function(resp) {
      var success_condition = resp.signature && resp.noncestr && resp.appid && resp.timestamp;
      if (success_condition) {
        wx.config({
          // debug: true,
          appId: resp.appid,
          timestamp: resp.timestamp,
          nonceStr: resp.noncestr,
          signature: resp.signature,
          jsApiList: jsApiList,
        });
        wx.ready(function() {
          wx.checkJsApi({
            jsApiList: jsApiList,
            fail: function (res) {
              alert(JSON.stringify(res));
            }
          });
          callback(resp);
        });
        wx.error(function(res){
          alert(JSON.stringify(res))
        });
      } else {
        alert('获取签名失败！');
      }
    }
  })
}