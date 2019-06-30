<?php
  //获得参数 signature nonce token timestamp echostr
  $token     = 'wangkun228937';
  $nonce     = $_GET['nonce'];
  $timestamp = $_GET['timestamp'];
  $echostr   = $_GET['echostr'];
  $signature = $_GET['signature'];

  //形成数组，然后按字典序排序
  $array = array($nonce, $timestamp, $token);
  sort($array);

  //拼接成字符串,sha1加密 ，然后与signature进行校验
  $str = sha1(implode($array));
  if ( $str == $signature && $echostr ){
    echo $echostr;
  } else {
    echo '微信签名认证失败！';
  }
  exit;
?>