---
layout: post
title: "Array Like"
date_time: "2016-12-12 11:29:58 +0800"
description: ""
category:
- programming
tags:
---
{% include JB/setup %}

{% highlight HTML linenos %}
<!DOCTYPE html>
<html>
<body>

  <div id='testArrayLike'>
    abc
  </div>
  <br />
  <br />

  <div id='mylog' style='color: red'>

  </div>

<script>
var arg = 'log';
arg = 'assert'; // TODO:
var baseLogFunction = console[arg];
console[arg] = function(){
  baseLogFunction.apply(console, arguments);

  var args = Array.prototype.slice.call(arguments);
  for(var i = 0; i < args.length; i++){
    var node = createLogNode(args[i]);
    document.querySelector("#mylog").appendChild(node);
  }
}

function createLogNode(message){
  var node = document.createElement("div");
  var textNode = document.createTextNode(message);
  node.appendChild(textNode);
  return node;
}

window.onerror = function(message, url, linenumber) {
  console[arg]("JavaScript error: " + message + " on line " +
  linenumber + " for " + url);
}

/*
// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
  if (o && // o is not null, undefined, etc.
    typeof o === 'object' && // o is an object
    isFinite(o.length) && // o.length is a finite number
    o.length >= 0 && // o.length is non-negative
    o.length===Math.floor(o.length) && // o.length is an integer
    o.length < 4294967296) // o.length < 2^32
    return true; // Then o is array-like
  else
    return false; // Otherwise it is not
}
*/


function isArrayLike(o) {
  return o
    && typeof o === 'object'
    && isFinite(o.length)
    && o.length >= 0
    && o.length === Math.floor(o.length)
    && o.length < 4294967296; // 4294967296 means 2^32;
}

function testArguments () {
  console.log(arguments, Array.isArray(arguments), arguments.length, Array.isArray(arguments[3]));
  console.log('arguments', isArrayLike(arguments));
}

testArguments(2, 3, 4, [1, 2, 3]);

var a1 = {a: 1, b: 2, length: 4294967296};
var a2 = {a: 1, b: 2, length: Math.pow(2, 32)};
var a3 = {a: 1, b: 2, length: 1.1};
var a4 = {a: 1, b: 2, length: '3'};
var a5 = '123';
var a6 = {a: 1, b: 2, length: Infinity};
var a7 = {a: 1, b: 2, length: 30};

var isShowError = false;
isShowError = true; // TODO:
console.assert(isArrayLike(document.querySelector('#testArrayLike')) === isShowError, 'element testArrayLike', document.querySelector('#testArrayLike'));
console.assert(isArrayLike(document.querySelectorAll('#testArrayLike')), 'element all testArrayLike', document.querySelectorAll('#testArrayLike'));
console.assert(isArrayLike(a1) === isShowError, '4294967296 a1', a1);
console.assert(isArrayLike(a2) === isShowError, 'Math.pow(2, 32) a2', a2);
console.assert(isArrayLike(a3) === isShowError, 'a3', a3);
console.assert(isArrayLike(a4) === isShowError, 'a4', a4);
console.assert(isArrayLike(a5) === isShowError, 'a5 String', a5);
console.assert(isArrayLike(a6) === isShowError, 'a6', a6);
console.assert(isArrayLike(a7), 'a7', a7);

</script>
</body>
</html>
{% endhighlight %}
