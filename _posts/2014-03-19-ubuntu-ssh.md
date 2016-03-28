---
layout: post
title: "Ubuntu ssh"
description: ""
category:
- programming
tags:
- Ubuntu
---
{% include JB/setup %}

Ubuntu 环境下 SSH 的安装及使用
========

SSH是指Secure Shell,是一种安全的传输协议，Ubuntu客户端可以通过SSH访问远程服务器 。SSH的简介和工作机制可参看上篇文章 [SSH简介及工作机制](http://blog.csdn.net/netwalk/article/details/12951031)。

安装服务端
--------

Ubuntu 安装 SSH Server:

    $ sudo apt-get install openssh-server

确认是否开启服务

    $ ps -e | grep ssh

如果看到 sshd 那说明 ssh-server 已经启动了

如果没有则可以这样启动:

    $ sudo /etc/init.d/ssh start

References:
---------
* JerryHe. [Ubuntu环境下SSH的安装及使用](http://blog.csdn.net/netwalk/article/details/12952051)
