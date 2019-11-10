---
layout: post
title: "Rem 自适应页面的布局配置"
date_time: "2017-09-24 23:42:36 +0800"
description: ""
category:
- programming
tags:
---

## 使用 Rem 适配屏幕

rem 是（font size of the root element），是根据网页的跟元素（html）来设置字体大小的。如下：

{% highlight CSS linenos %}
html {
  font-size: 50px;
}
{% endhighlight %}

如果 html 的 fontSize 是固定的，则在不同尺寸的屏幕上可能要么不够放，要么布局上不符合我们的期待。因此我们希望 html 的 fontSize 跟随手机屏幕（即 window.innerWidth）的尺寸变化。

设置 viewport

{% highlight HTML linenos %}
<meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no">
{% endhighlight %}

设置 Rem

{% highlight JavaScript linenos %}
var designCSSWidth = 375;
var baseFontSize = 50;

var w = window;
var d = document;
var html = d.documentElement;
function setRem() {
  var width = w.innerWidth;
  var size = baseFontSize * width / designCSSWidth;
  html.style.fontSize = size + 'px';
}
setRem();
{% endhighlight %}

然后我们发现在部分机型在 WebView 内需要 load 之后才能获取正确 innerWidth，而一开始它只能获得有问题的 innerWidth，这会影响我们的布局。这个 WebView 下有问题，但是其浏览器是没有问题的。

{% highlight JavaScript linenos %}
var on = 'addEventListener';
w[on]('load', setRem, false);
{% endhighlight %}

只是如上设置发现，有问题的设备将会闪一下，毕竟 rem 突然变化了一下，简单的做法就是先 display none，好了再 display block。

但是设置 display none，会发现没有问题的设备白屏时间过长。这个不能忍。经测试只有安卓的设备会有问题，iOS 上没有看到问题，因此这些操作可以只在安卓生效。安卓一开始可以拿到一个错误的 innerWidth 然后 inneWidth 很大，通常大于 500，因此可以这么设定。

{% highlight JavaScript linenos %}
if (w.innerWidth > 500 && isAnd) {
}
{% endhighlight %}

这样设定后只有有问题的安卓机才会有过长的白屏时间。但我们不能只满足这一点，看是否也能让有问题的安卓机的白屏时间缩短。

首先我们想到用 setTimeout，然后简单测试了一下

{% highlight JavaScript linenos %}
var time = 100;
setTimeout(function() {

}, time);
{% endhighlight %}

经测试，这个 time 的时间可能是几十毫秒，也可能是一百多毫秒，总之这个时间不一定，所以完全可以多次 setTimeout 去解决渲染的问题。每秒 60 帧 1000 / 60。

{% highlight JavaScript linenos %}
var limit = 10;
var raf = function (cb) {
  setTimeout(function () {
    cb && cb();
  }, 1000 / 60);
}
var isAnd = w.navigator.userAgent.match(/Android/) || true;

function setRemFallback() {
  // 经测试不能保证第一次就拿到正确 innerWidth，所以设置一个延时（即次数限制）。
  limit--;
  if (limit && w.innerWidth > 500) {
    raf && raf(setRemFallback)
  } else {
    setRem();
    d.documentElement.style.display = 'block';
  }
}

if (w.innerWidth > 500 && isAnd) {
  d.documentElement.style.display = 'none';
  /**
   * 部分机型在 WebView 内需要 load 之后才能获取正确 innerWidth。判断标准为其大于 500 的时候。
   * 先隐藏 HTML，拿到正确的 innerWidth 再显示。有问题的机器包括魅族 M1
   */
  if (!raf) {
    w[on]('load', setRemFallback, false);
  } else {
    raf(setRemFallback);
  }
}
{% endhighlight %}

到这，其实也已经够用了，但是我们还可以精益求精。我们知道的，setTimeout 的刷新时间并不准确，并且性能也不好。有一个替代品 requestAnimationFrame。

[window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器调用指定的函数在下一次重绘之前更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

简单说 requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。

在这我们仅需要把 raf 这个方法换一下。另外 requestAnimationFrame 可能有兼容性问题，可考虑 webkitRequestAnimationFrame。

{% highlight JavaScript linenos %}
var raf = w.requestAnimationFrame || w.webkitRequestAnimationFrame;
{% endhighlight %}

最终结果为：

{% highlight JavaScript linenos %}
var designCSSWidth = 375;
var baseFontSize = 50;

var w = window;
var d = document;
var on = 'addEventListener';
var html = d.documentElement;
function setRem() {
  var width = w.innerWidth;
  var size = baseFontSize * width / designCSSWidth;
  html.style.fontSize = size + 'px';
  console.log('done rem', width);
}

var isAnd = w.navigator.userAgent.match(/Android/) || true;
var raf = w.requestAnimationFrame || w.webkitRequestAnimationFrame;
var limit = 10;
function setRemFallback() {
  // 经测试不能保证第一次就拿到正确 innerWidth，所以设置一个延时（即次数限制）。
  limit--;
  if (limit && w.innerWidth > 500) {
    raf && raf(setRemFallback)
  } else {
    setRem();
    d.documentElement.style.display = 'block';
  }
}
if (w.innerWidth > 500 && isAnd) {
  d.documentElement.style.display = 'none';
  /**
   * 部分机型在 WebView 内需要 load 之后才能获取正确 innerWidth。判断标准为其大于 500 的时候。
   * 先隐藏 HTML，拿到正确的 innerWidth 再显示。有问题的机器包括魅族 M1
   */
  if (!raf) {
    w[on]('load', setRemFallback, false);
  } else {
    raf(setRemFallback);
  }
}

setRem();
w[on]('resize', setRem, false);
{% endhighlight %}

## References:

* 移动端网页 rem响应式布局 最佳实践代码. <https://github.com/jieyou/rem_layout>
* CSS3动画那么强，requestAnimationFrame还有毛线用？. <http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/>
