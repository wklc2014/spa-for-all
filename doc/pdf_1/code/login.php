<?php
$page_title = 'Welcome to this site';
include('./includes/header.inc.html');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (isset($_POST['username'], $_POST['password'])) {
    echo 'username is ' . $_POST['username'] . '<br />';
    echo 'password is ' . $_POST['password'] . '<br />';
  }
}
?>
<h1>Login</h1>
<form action="login.php" method="post" class="login-form">
  <div class="form-control">
    <label for="username">用户：</label>
    <input type="text" placeholder="请输入用户名" id="username" name="username" class="form-item" />
  </div>
  <div class="form-control">
    <label for="password">密码：</label>
    <input type="text" placeholder="请输入密码名" id="password" name="password" class="form-item" />
  </div>
  <div class="form-control">
    <button class="form-item" type="submit">提交</button>
    <button class="form-item" type="reset">重置</button>
  </div>
</form>
<?php
include('./includes/footer.inc.html');
?>