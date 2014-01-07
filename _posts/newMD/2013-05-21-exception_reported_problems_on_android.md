---
layout: post
title: 关于 android 报 exception 的问题
categories:
- programming
tags:
- Android
---
{% include JB/setup %}

android 程序只要你写错了就报异常，莫名其妙退出

所以可以考虑用 try-catch 的形式抓取异常，
然后很多时候你感觉哪里出异常了，不过实际上是另外一个地方出现异常
在安卓里面
onPause 在你调用别的 layout 的时候有可能就会出现异常

## References:

* [六种异常处理的陋习](http://www.blogjava.net/freeman1984/archive/2007/09/27/148850.html)