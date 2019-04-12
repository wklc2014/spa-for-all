<?php
  include_once 'getAccessToken.php';
  include_once 'getJsApiTicket.php';
  include_once 'getRandChar.php';

  function getSignature($url) {
    $appid = 'wx0dd2c805c88e7f0a';
    $appsecret = 'b51132eb104a30e3041a363f2e9f60d0';
    $noncestr = getRandChar(16);
    $timestamp = time();
    $access_token = getAccessToken($appid, $appsecret);
    $jsapi_ticket = getJsApiTicket($access_token);
    $data = 'jsapi_ticket=' . $jsapi_ticket . '&noncestr=' . $noncestr . '&timestamp=' . $timestamp . '&url=' . $url;
    $signature = sha1($data);
    $response['jsapi_ticket'] = $jsapi_ticket;
    $response['access_token'] = $access_token;

    $response['url'] = $url;
    $response['appid'] = $appid;
    $response['timestamp'] = $timestamp;
    $response['noncestr'] = $noncestr;
    $response['signature'] = $signature;
    return json_encode($response);
  }

  $url = $_POST['url'];
  $signature = getSignature($url);
  echo $signature;
?>