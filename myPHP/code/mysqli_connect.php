<?php
// 该文件包含数据库连接信息
// 连接数据库
// 选择数据表
// 设置编码
DEFINE('DB_USER', 'root');
DEFINE('DB_PASSWORD', 'ww');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'sitename');

// make the connection
$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die ('Could not connect to mysql: ' . mysqli_connect_error());

// set the encoding
mysqli_set_charset($dbc, 'utf8');

?>