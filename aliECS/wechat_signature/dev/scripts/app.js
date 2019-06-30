function appStart(params) {
  var localUrl = window.location.href.split('#')[0];
  var jsApiList = params.jsApiList;
  var callback = params.callback;
  $.ajax({
    url: 'http://www.donsoncq.com/wechat_signature/getSignature.php',
    type: 'post',
    dataType: "json",
    data: { url: localUrl },
		error: function(er) {
			console.log('ajax error');
		},
    success: function(resp) {
			console.log('ajax success');
      var success_condition = resp.signature && resp.noncestr && resp.appid && resp.timestamp;
      if (success_condition) {
        wx.config({
          debug: true,
          appId: resp.appid,
          timestamp: resp.timestamp,
          nonceStr: resp.noncestr,
          signature: resp.signature,
          jsApiList: jsApiList,
        });
        wx.ready(function() {
					console.log('wx ready');
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