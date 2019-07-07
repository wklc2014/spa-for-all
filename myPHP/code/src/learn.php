<?php
DEFINE(DB_HOST, '127.0.0.1');
// DEFINE(DB_HOST, 'localhost');
DEFINE(DB_USERNAME, 'root');
DEFINE(DB_PASSWORD, 'ww');
DEFINE(DB_NAME, 'sitename');
$conn = @mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD) or die("数据库连接失败：" . mysqli_connect_error());
$select = @mysqli_select_db($conn, DB_NAME) or die("数据库选择失败：" . mysqli_error($conn));
if ($select) {
	echo '数据库连接成功！';
}

?>