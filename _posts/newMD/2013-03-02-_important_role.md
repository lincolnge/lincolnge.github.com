---
layout: post
title: '!important的作用'
categories:
- Web开发
tags: [CSS]
---
{% include JB/setup %}

!important是CSS1就定义的语法，作用是提高指定样式规则的应用优先权
语法格式`{sRule!important }`，直接写在定义的最后面，如：

    p{color:green !important;}

注意：IE一直都不支持这个语法，而其他的浏览器都支持。因此我们就可以利用这一点来分别给FF和IE浏览器样式定义。