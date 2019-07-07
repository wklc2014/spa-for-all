<?php
// header("Content-type: text/html; charset=utf-8");
$page_title = '注册成功';
$active = 1;
include_once('./includes/header.inc.html');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  global $errors;
  $errors = array();
  
  function validateNormalFields($id, $errorMsg) {
    if (empty($_POST[$id])) {
      array_push($GLOBALS['errors'], $errorMsg);
    } else {
      return trim($_POST[$id]);
    }
  }
  
  function validatePasswordField($first, $confirm) {
    if (empty($_POST[$first])) {
      array_push($GLOBALS['errors'], 'You forgot to enter your password!');
    } else {
      if ($_POST[$first] !== $_POST[$confirm]) {
        array_push($GLOBALS['errors'], 'Your password did not match the confirmed password!');
      } else {
        return trim($_POST[$first]);
      }
    }
  }
  
  $first_name = validateNormalFields('first_name', 'You forgot to enter your first name!');
  $last_name = validateNormalFields('last_name', 'You forgot to enter your last name!');
  $email = validateNormalFields('email', 'You forgot to enter your email address!');
  $password = validatePasswordField('first_password', 'confirm_password');
  
  // print_r($_POST);
  // echo '<br />';
  // print_r($errors);
  
  if (empty($errors)) {
    require('../mysqli_connect.php');
    $q = "INSERT INTO users (first_name, last_name, email, pass, registration_date) VALUES ( '$first_name', '$last_name', '$email', SHA1('$password'), NOW() )";
    
    $r = @mysqli_query($dbc, $q);
    
    if ($r) {
      echo '<h1>Thank You</h1>';
      echo '<p>You are now registered.</p>';
    } else {
      echo '<h1>System Error</h1>';
      echo '<p>' . mysqli_error($dbc) .'</p>';
      echo '<p>Query: ' . $q .'</p>';
    }
    
    mysqli_close($dbc);
    
    
  } else {
    
    echo '<h1>Error!</h1>';
    echo '<p class="errors">The following error(s) occured:</p>';
    echo '<ul>';
    foreach($errors as $msg) {
      echo '<li>' . $msg .'</li>';
    }
    echo '</ul>';
    
    echo '<p>Please try again</p>';
  }
  
	include('./includes/footer.inc.html');
  exit();
}    
?>
