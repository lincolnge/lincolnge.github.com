---
layout: post
title: "LinkList JavaScript"
date_time: "2017-04-29 20:01:25 +0800"
description: ""
category:
- programming
tags:
---

### LinkList JavaScript

{% highlight JavaScript linenos %}
/**
 * 用 JavaScript 定义的一个链表结构。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 链表数据
 * [2, 4, 3]
 * [5, 6, 4]
 */
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
{% endhighlight %}
