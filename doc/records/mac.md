# Mac OS

## apache

```
sudo apachectl start
sudo apachectl -v
sudo apachectl restart
```
mac 自带的服务器文件地址:
/Library/WebServer/Documents

mac hosts 文件地址
sudo vim /private/etc/hosts
sudo vim /private/etc/apache2/httpd.conf
sudo vim /private/etc/apache2/extra/httpd-vhosts.conf

```
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName a.test.com
        DocumentRoot "/Users/lc/Documents/github/spa-for-all/myPHP/code/src"
        <Directory "/Users/lc/Documents/github/spa-for-all/myPHP/code/src">
                Options Indexes MultiViews
                AllowOverride All
        </Directory>
</VirtualHost>
```


```
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
```