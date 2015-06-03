---
layout: post
title: Python raw_input input
categories:
- programming
tags:
- Python
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

Result:

    >>> name = raw_input("你猜：")
    你猜：d
    >>> print "hello. " + name + "!"
    hello. d!
    >>> name2 = input("你再猜(请输入数字,或者带有引号的字符串)：")
    你再猜(请输入数字,或者带有引号的字符串)：d
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
      File "<string>", line 1, in <module>
    NameError: name 'd' is not defined
    >>> name2 = input("你再猜(请输入数字,或者带有引号的字符串)：")
    你再猜(请输入数字,或者带有引号的字符串)：3
    >>> print name2
    3

说明：

    # -*- coding: cp936 -*- 指定代码保存时候使用的字符集，建议使用UTF-8，cp936 是 Windows 系统使用的字符集。
