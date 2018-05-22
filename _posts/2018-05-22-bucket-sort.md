---
layout: post
title: "桶排序"
date_time: "2018-05-22 08:17:30 +0800"
description: ""
category:
- learning
tags:
---
{% include JB/setup %}

记一次学习桶排序
[Algorithm in Javascript Bucket Sort](https://juejin.im/post/5853542c61ff4b006848e8bb)

疑惑：

- 最大值怎么设置？
- 使用场景是啥？

通过各种渠道的搜索，发现是使用的人设置了一下最大值。

在这之间了解到一个叫稳定的概念。

稳定（stable、non-stable）：稳定就是两个相等的数。。顺序不会变。

桶排序为啥会是稳定的呢？毕竟没有比较，没有比较就没有不稳定的情况。我理解的不稳定就是因为比较大小，会造成顺序切换，另外就是随机取一个值的时候，无法知道他比较后的位置（比如快排）。

	对于不稳定的排序算法，只要举出一个实例，即可说明它的不稳定性；而对于稳定的排序算法，必须对算法进行分析从而得到稳定的特性。需要注意的是，排序算法是否为稳定的是由具体算法决定的，不稳定的算法在某种条件下可以变为稳定的算法，而稳定的算法在某种条件下也可以变为不稳定的算法。

[百度百科排序算法稳定性](https://baike.baidu.com/item/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E7%A8%B3%E5%AE%9A%E6%80%A7)

毕竟稳定不稳定是可以相互切换的。

继续解答桶排的问题。

和算法的同事交流，桂波说：桶排可以设个初始化的桶数，遇到大的放不下的就再增加到那么多个。

桶排的简单理解：就比如说按年龄排序，1~10 岁放一起，11~20 放一起，21~30 放一起；放完第一波后，对 1~10 里面的再继续分为 1 放一起，2 放一起~

所以桶排是很占空间的。

解答：

- 最大值如果一开始已知就设置，若未知可先设置某个值，之后加桶
- 知道最大值的情况下，不限制空间。均匀分布的数字数组。

TODO: 使用场景可能需要补充或调整

to be continue...

## References:

* [Bucket_sort](https://en.wikipedia.org/wiki/Bucket_sort)
* [Algorithm in Javascript Bucket Sort](https://juejin.im/post/5853542c61ff4b006848e8bb)
* [百度百科排序算法稳定性](https://baike.baidu.com/item/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E7%A8%B3%E5%AE%9A%E6%80%A7)

