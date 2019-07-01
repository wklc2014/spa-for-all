<?php
  include_once 'getAccessToken.php';
  include_once 'getJsApiTicket.php';
  include_once 'getRandChar.php';

  function getSignature($url) {
    $appid = 'wx8abda545006976c8';
    $appsecret = '6d9532e9e5707b0ecca5a2faef254066';
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