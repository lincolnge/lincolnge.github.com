---
layout: post
title: ubuntu phpmyadmin
categories:
- programming
tags: 
- Ubuntu
- PHP
---
{% include JB/setup %}

安装phpmyadmin在/usr/share/phpmyadmin目录下：sudo apt-get install phpmyadmin

重启apache：
<pre>$ sudo /etc/init.d/apache2 restart</pre>
dpkg -L phpmyadmin 看看安装在什么地方

http://localhost/phpmyadmin/
