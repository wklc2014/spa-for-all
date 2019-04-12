<?php
  /**
   * $length : the length of the result String
   */
  function getRandChar($length) {
    $char = null;

    //大小写字母以及数字
    $charLib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

    $max = strlen($charLib)-1;

    for ($i = 0; $i < $length; $i++) {
       $char .= $charLib[rand(0, $max)];
    }

    return $char;
  }
?>