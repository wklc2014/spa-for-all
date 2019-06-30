<?php
  include_once "httpsRequest.php";

  function getJsApiTicket($accessToken) {
    $file_path = './cache_files/jsapi_ticket.json';
    $file = file_get_contents($file_path, true);
    $result = json_decode($file, true);
    $expires = $result['expires'];
    $data = $result['data'];

    if (time() > $expires) {
      $new_ticket = getNewJsApiTicket($accessToken);
      if ($new_ticket) {
        $data = array();
        $data['data'] = $new_ticket;
        $data['expires'] = time() + 7200;
        $jsonStr =  json_encode($data);
        $fp = fopen($file_path, "w");
        fwrite($fp, $jsonStr);
        fclose($fp);
        return $data['data'];
      } else {
        return '123';
      }
    } else {
      return $data;
    }
  }

  function getNewJsApiTicket($accessToken) {
    $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token={$accessToken}&type=jsapi";
    $resp =  httpsRequest($url);
    if ($resp['ticket']) {
      return $resp['ticket'];
    }
    return false;
  }
?>