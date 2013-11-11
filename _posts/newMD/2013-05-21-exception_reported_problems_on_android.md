---
layout: post
title: 关于android报exception的问题
categories:
- Android platform
tags:
- it
---
{% include JB/setup %}

<a href="http://photo.blog.sina.com.cn/showpic.html#blogid=626a2e8d0101kkwh&amp;url=http://s5.sinaimg.cn/orignal/626a2e8dgdd30d91d8a34" target="_blank"><img src="http://lincolnge.duapp.com/wp-content/uploads/pic/626a2e8dgdd30d91d8a34.jpg" width="690" height="269" name="image_operate_35921369101832981" alt="关于android报exception的问题" title="关于android报exception的问题" /></a>

<a href="http://photo.blog.sina.com.cn/showpic.html#blogid=626a2e8d0101kkwh&amp;url=http://s9.sinaimg.cn/orignal/626a2e8dg7c84e284ec08" target="_blank"><img src="http://lincolnge.duapp.com/wp-content/uploads/pic/626a2e8dg7c84e284ec08.jpg" width="626" height="376" name="image_operate_27671369101833686" alt="关于android报exception的问题" title="关于android报exception的问题" /></a>

android 程序只要你写错了就报异常，莫名其妙退出

所以可以考虑用try-catch的形式抓取异常，
然后很多时候你感觉哪里出异常了，不过实际上是另外一个地方出现异常
在安卓里面
onpause在你调用别的layout的时候有可能就会出现异常

外链：
<a href="http://www.blogjava.net/freeman1984/archive/2007/09/27/148850.html">
六种异常处理的陋习</a>
