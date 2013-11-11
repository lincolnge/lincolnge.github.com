---
layout: post
title: python基本输入 input &amp;&amp; raw_input
categories:
- Python
tags:
- it
status: publish
type: post
published: true
meta:
  duoshuo_thread_id: '1365771562581491746'
---
{% include JB/setup %}

程序如下：

----------------------------------------------------
    # -*- coding: cp936 -*-
    #简单输入

    name = raw_input("你猜：")
    print "hello. " + name + "!"

    name2 = input("你再猜(请输入数字,或者带有引号的字符串)：")
    print name2

----------------------------------------------------