<?php
  include_once "httpsRequest.php";

  function getAccessToken($appid, $secret) {
    $file_path = './cache_files/access_token.json';
    $file = file_get_contents($file_path, true);
    $result = json_decode($file, true);
    $expires = $result['expires'];
    $data = $result['data'];

    if (time() > $expires) {
      $new_token = getNewAccessToken($appid, $secret);
      if ($new_token) {
        $tmp_array = array();
        $tmp_array['data'] = $new_token;
        $tmp_array['expires'] = time() + 7200;
        $jsonStr =  json_encode($tmp_array);
        $fp = fopen($file_path, "w");
        fwrite($fp, $jsonStr);
        fclose($fp);
        return $tmp_array['data'];
      } else {
        return false;
      }
    } else {
      return $data;
    }
  }

  function getNewAccessToken($appid, $secret) {
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$secret}";
    $resp =  httpsRequest($url);
    if ($resp['access_token']) {
      return $resp['access_token'];
    }
    return false;
  }
?>