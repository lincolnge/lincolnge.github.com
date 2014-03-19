---
layout: post
title: 静音
categories:
- Science and Technology
tags:
- Android
---
{% include JB/setup %}

去掉安卓相机声音
=========

Root 安卓
---------
(目的：得到修改权限)

百度百科: [安卓root权限](http://baike.baidu.com/link?url=8-zk0r3F5zdymwIb7Afbq0eQoUX87X3jY7Q4pbXIchU7iyiRO9yVn-80eiBFZppxzUVFXtsVWEs2CEoW9bkhq_)

简而言之: 就是类似苹果的越狱  
ps: 找工具 root, 本文暂时不提供 root 方法.

安装 RE 文件管理器(Root Explorer)
---------
百度应用: [RE文件管理器](http://as.baidu.com/a/item?docid=5933606&f=web_alad_6)

删除相机声音文件
---------
在 /system/media/audio/ui/ 找到 camera_click.ogg 然后改名或者删除都可以（需要得到修改权限）

<img alt="" src="/files/images/root_explorer.png" width="385" height="509" name="" />