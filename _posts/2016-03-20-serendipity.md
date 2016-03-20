---
layout: post
title: "Serendipity"
date_time: "2016-03-20 10:35:32 +0800"
description: ""
category:
tags: []
---
{% include JB/setup %}

### JavaScript 秘密花园
<http://bonsaiden.github.io/JavaScript-Garden/zh/>

### 奇技淫巧：

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

end
