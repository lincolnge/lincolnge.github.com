---
layout: post
title: "why post data choose json not form"
date_time: "2016-06-09 11:04:14 +0800"
description: ""
category:
- draft
tags:
---
{% include JB/setup %}

JSON 传输是带类型的，你说的传统的POST是Content-Type:application/x-www-form-urlencoded，就表示虽然也按键/值传递了，但确实字符串，本来数据该有的类型被忽略了。
JSON 类型的数据可以比较好的支持嵌套的数据格式，这种数据格式在后端可以和文档数据库（比如 mongodb）的存储结构直接对应；在前端可以和 js 的数据对象直接对应。
https://segmentfault.com/q/1010000003015987

浏览器中的 key=value&key=value 是拼接在 url 上然后传递给 server 的，别说用的是POST 请求，其实和 GET 没啥区别。虽然都能解决问题，但有优劣之分。
1.用 KV 连接 URL，使得 URL 比较丑陋。
2.用 KV 连接 URL，如果有敏感信息，存在安全问题。
3.用 KV 连接 URL，长度有限制。
如果用 JSON，可以使用 request body 发送数据，就回避了第一点第三点，第二点相对来说要好点。
JSON 格式的数据现在比较通用，各种语言支持性都比较好。

四种常见的 POST 提交数据方式
https://imququ.com/post/four-ways-to-post-data-in-http.html
