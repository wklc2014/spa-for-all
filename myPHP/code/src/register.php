<?php
  $page_title = '用户注册';
	$nav_active = 1;
  include_once('./includes/header.inc.html');
?>
<h1>Register</h1>
<form action="go_register.php" method="post" class="login-form">
  <div class="form-control">
    <label for="first_name">用户姓：</label>
    <input 
      type="text" 
      placeholder="请输入用户姓" 
      id="first_name" 
      name="first_name" 
      class="form-item" 
      value="<?php if(isset($_POST['first_name'])) echo $_POST['first_name']; ?>"
    />
  </div>
  <div class="form-control">
    <label for="last_name">用户名：</label>
    <input 
      type="text" 
      placeholder="请输入用户名" 
      id="last_name" 
      name="last_name" 
      class="form-item" 
      value="<?php if(isset($_POST['last_name'])) echo $_POST['last_name'];?>"
    />
  </div>
  <div class="form-control">
    <label for="email">邮箱：</label>
    <input 
      type="text" 
      placeholder="请输入邮箱" 
      id="email" 
      name="email" 
      class="form-item" 
      value="<?php if(isset($_POST['email'])) echo $_POST['email'];?>"
    />
  </div>
  <div class="form-control">
    <label for="first_password">密码：</label>
    <input 
      type="password" 
      placeholder="请输入密码" 
      id="first_password" 
      name="first_password" 
      class="form-item" 
      value="<?php if(isset($_POST['first_password'])) echo $_POST['first_password'];?>"
    />
  </div>
  <div class="form-control">
    <label for="confirm_password">确认密码：</label>
    <input 
      type="password" 
      placeholder="请再次输入密码" 
      id="confirm_password" 
      name="confirm_password" 
      class="form-item" 
      value="<?php if(isset($_POST['confirm_password'])) echo $_POST['confirm_password'];?>"
    />
  </div>
  <div class="form-control">
    <button class="form-item" type="submit">提交</button>
    <button class="form-item" type="reset">重置</button>
  </div>
</form>
<?php
include('./includes/footer.inc.html');
?>