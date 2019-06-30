# Mac OS

## apache

```
sudo apachectl start
sudo apachectl -v
sudo apachectl restart
```
mac 自带的服务器文件地址:
/Library/WebServer/Documents



docker run \
--name aliyun-nginx-php-server-wk \
-p 80:80 \
-v ~/wk/www:/usr/share/nginx/html \
-v ~/wk/conf/nginx.conf:/etc/nginx/nginx.conf \
-v ~/wk/conf/conf.d:/etc/nginx/conf.d \
-v ~/wk/logs:/var/log/nginx \
--link myphp-fpm:php \
-d \
nginx

docker run --name  myphp-fpm -v ~/wk/www:/www  -d php:5.6-fpm