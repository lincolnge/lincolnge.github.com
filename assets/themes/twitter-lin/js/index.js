/* */
$(function () {

});

// SetRem
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
