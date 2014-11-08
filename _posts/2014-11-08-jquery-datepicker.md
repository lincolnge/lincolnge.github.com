---
layout: post
title: "jQuery datepicker"
date_time: "2014-11-08 12:14:36 +0800"
description: ""
category: programming
tags: [jQuery, Web开发]
---
{% include JB/setup %}

jQuery UI datepicker 的一些实际应用.  
演示效果请移步: <http://plnkr.co/edit/q5mLhKQ3S1KJP8KXg6dn>

### 第二个日期自动弹出.
----
两个日历的时候(从xx日期到xx日期), 选择第一个日期后第二个日期将会弹出.

html:

	<input type="text" class="datepicker in">
	<input type="text" class="datepicker out">

Javascript:

	$( ".datepicker" ).datepicker({
		onSelect: function(dateText, inst) {
			if ($(this).hasClass("in")) {
				setTimeout(function() { $('.out').focus(); }, 0);
			}
		}
	});


### 第二个日期的最小值
----
当选择了第一个日期后, 第二个的日期应该大于第一个的日期, 设置第二个日期的最小值

html:

	<input type="text" class="datepicker in">
	<input type="text" class="datepicker out">

Javascript:

	$( ".datepicker" ).datepicker({
		onSelect: function(dateText, inst) {
			$( ".out" ).datepicker("option", "minDate", new Date($(".in").val()) );
		}
	});


### 在移动设备上
----
在移动设备上为了不弹出键盘

html:

	<input type="text" class="datepicker">

Javascript:

	$( ".datepicker" ).datepicker().attr('readonly', 'readonly');


### 其他的建议参考官方文档
----

<http://api.jqueryui.com/datepicker/>