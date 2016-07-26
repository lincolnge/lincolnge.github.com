---
layout: post
title: "Serendipity"
date_time: "2016-03-20 10:35:32 +0800"
description: ""
category:
- programming
tags:
- Conclusion
---
{% include JB/setup %}

## 憧憬

这是一个很有趣的世界。

### JavaScript 秘密花园

#### 许可

JavaScript 秘密花园在 MIT license 许可协议下发布，并存放在 GitHub 开源社区。 如果你发现错误或者打字错误，请新建一个任务单或者发一个抓取请求。 你也可以在 Stack Overflow 的 JavaScript 聊天室找到我们。

<http://bonsaiden.github.io/JavaScript-Garden/zh/>

### Others

[有哪些短小却令人惊叹的javascript代码？](https://www.zhihu.com/question/46943112)

### 奇技淫巧：

{% highlight JavaScript linenos %}
// 赋值
return { 1: '是', 0: '否' }[value] // value = 0 || 1
+new Date() // new Date().getTime()
var b = value || 0 // 有 value 的时候，b 为 value

// True && False
Number(false) || +false // 0
Number(true) || +true // 1
~~!true // 0
!!~0 // true index 场景下可用
!!~-1 // false
{% endhighlight %}

### hash 无法通过 url 直接传递给后端

可以用 JS 获取：

{% highlight JavaScript %}
$ var type = window.location.hash.substr(1);
{% endhighlight %}

或者用 encodeURIComponent() 方法转义:

    encodeURIComponent('#')
    "%23"

### References:
<http://www.ruanyifeng.com/blog/2011/03/url_hash.html>
