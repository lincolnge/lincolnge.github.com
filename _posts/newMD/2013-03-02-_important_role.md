---
layout: post
title: '!important 的作用'
categories:
- programming
tags: 
- CSS
---
{% include JB/setup %}

!important是 CSS1 就定义的语法，作用是提高指定样式规则的应用优先权
语法格式`{sRule!important }`，直接写在定义的最后面，如：

    p{color:green !important;}

注意：IE一直都不支持这个语法，而其他的浏览器都支持。因此我们就可以利用这一点来分别给FF和IE浏览器样式定义。