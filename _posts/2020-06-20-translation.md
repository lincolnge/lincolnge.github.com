---
layout: post
title: "translation"
date_time: "2020-06-20 15:51:54 +0800"
description: ""
category:
- translation
tags:
---

## ES6 的函数式 js ----- 递归模式

> 原文地址：<https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3>

> 作者：Casey Morris

这是处理什么问题？
函数式编程正在兴起，这是一个令人非常兴奋的话题。它使我可以编写简洁的声明性代码，易于测试和推理。 什么是函数式编程？ 我将把答案回答给对此主题有更多了解的人，Eric Elliot 说：

> 函数式编程(通常缩写为FP)是通过组合纯函数、避免共享状态、可变数据和副作用来构建软件的过程。函数式编程是声明式的，而不是命令式的，应用的状态通过纯函数传递。与面向对象编程相反，在面向对象编程中，应用的状态通常与对象中的方法共享和同步。

ES6带来了许多特性，让我们可以轻松编写纯函数，而 rest/spread 是最强大的功能之一。使用 rest 参数，我们可以使用递归进行无循环的循环。 在本文中，我们将重写许多支持函数模式的常用 JavaScript 方法/函数。

### 前言

以下函数用于演示和学习。下面的许多函数都是尾部递归的，应该进一步优化。优化尾部递归不是本文的主题。ES6带来了尾部调用优化，但必须与“严格模式”一起使用。

### Head

返回数组中的第一项。当您需要将第一项与数组的其余项分隔开时，非常有用。为此，我们使用了解构赋值。

```JavaScript
const head = ([x]) => x
```

示例：

```JavaScript
const array = [1,2,3,4,5]
head(array) // 1
```

### Tail

返回数组中除第一项以外的所有项。

```JavaScript
const tail = ([, ...xs]) => xs
```

上面的示例与如下所示本质上是一样的

```JavaScript
const tail = ([x, ...xs]) => xs
```

因为我们不需要在结果中使用 x，所以我们可以删除它，但是保留逗号以获取数组中的其他项。

示例：

```JavaScript
const array = [1,2,3,4,5]
tail(array) // [2,3,4,5]
```

### Def

返回参数是否已定义。

```JavaScript
const def = x => typeof x !== 'undefined'
```

示例：

```JavaScript
const defined = 'this is defined'
def(defined) // true
def(doesntExist) // false
```

### Undef

返回参数是否未定义。

```JavaScript
const undef = x => !def(x)
```

示例：

```JavaScript
const defined = 'this is defined'
undef(defined) // false
undef(doesntExist) // true
```

### Copy

不使用 array .slice() 返回数组的拷贝。利用 spread。

```JavaScript
const copy = array => [...array]
```

示例：

```JavaScript
let array = [1,2,3,4,5]
let copied = copy(array)
copied.push(6)

array // [1,2,3,4,5]
copied // [1,2,3,4,5,6]
```

### Length

返回数组的长度。这是使用递归循环遍历数组的一种非常简单的形式，尽管在本例中数组的值无关紧要(数组中的每一项都从 1 开始递增)。我们使用 len 参数来避免尾部递归。

```JavaScript
const length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1) : len
```

如果我们不关心尾部递归，我们可以把它写成

```JavaScript
const length = ([x, ...xs]) => def(x) ? 1 + length(xs) : 0
```

这将为数组中的每个项添加一个堆栈帧，而避免尾部递归的版本将替换单个堆栈帧。如果传入的数组足够大，它将抛错 “Maximum call stack size exceeded”。

示例：

```JavaScript
const array = [1,2,3,4,5]
length(array) // 5
```

### Reverse

返回一个反向数组。

```JavaScript
const reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x] : []
```

示例：

```JavaScript
const array = [1,2,3,4,5]
reverse(array) // [5,4,3,2,1]
```

Array.reverse() 可以使用，但是它有一个副作用，它会把原来的数组改掉。以下所示：

```JavaScript
const array = [1,2,3,4,5]

const newArray = array.reverse() // [5,4,3,2,1]
array // [5,4,3,2,1]

// using the reverse method we just created
const array2 = [1,2,3,4,5]

const newArray2 = reverse(array2) // [5,4,3,2,1]
array2 // [1,2,3,4,5]
```

### First

返回一个新数组，其中包含给定数组的前 n 项。

```JavaScript
const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : []
```

示例：

```JavaScript
const array = [1,2,3,4,5]
first(array, 3) // [1,2,3]
```

### Last

返回一个新数组，其中包含给定数组的最后 n 项。

```JavaScript
const last = (xs, n = 1) => reverse(first(reverse(xs), n))
```

示例：

```JavaScript
const array = [1,2,3,4,5]
last(array, 3) // [3,4,5]
```

### slice

返回在给定索引处插入值的新数组。

```JavaScript
const slice = ([x, ...xs], i, y, curr = 0) => def(x)
  ? curr === i
    ? [y, x, ...slice(xs, i, y, curr + 1)]
    : [x, ...slice(xs, i, y, curr + 1)]
  : []
```

示例：

```JavaScript
const array = [1,2,4,5]
slice(array, 2, 3) // [1,2,3,4,5]
```

### isArray

返回是否是数组。允许我们以更函数化的方式编写 Array.isArray()。

```JavaScript
const isArray = x => Array.isArray(x)
```

示例：

```JavaScript
const array = [1,2,3,4,5]
isArray(array) // true
```

### Flatten

将多维数组变成一维数组。

```JavaScript
const flatten = ([x, ...xs]) => def(x)
    ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
    : []
```

示例：

```JavaScript
const array1 = [1,2,3]
const array2 = [4,[5,[6]]]
flatten([array1, array2]) // [1,2,3,4,5,6]
```

### Swap

交换两项的值返回一个新数组。

```JavaScript
const swap = (a, i, j) => (
  map(a, (x,y) => {
    if(y === i) return a[j]
    if(y === j) return a[i]
    return x
  })
)
```

示例：

```JavaScript
const array = [1,2,3,4,5]
swap(array, 0, 4) // [5,2,3,4,1]
```

### Map

MDN: 数组中元素执行传入函数生成一个新的数组。

```JavaScript
const map = ([x, ...xs], fn) => {
  if (undef(x)) return []
  return [fn(x), ...map(xs, fn)]
}
```

可以简化为

```JavaScript
const map = ([x, ...xs], fn) => def(x) ? [fn(x), ...map(xs, fn)] : []
```

示例：

```JavaScript
const double = x => x * 2
map([1,2,3], double) // [2,4,6]
```

### Filter

MDN: 数组中元素执行传入函数通过验证执行生成一个新的数组。

```JavaScript
const filter = ([x, ...xs], fn) => {
  if (undef(x)) return []
  if (fn(x)) {
    return [x, ...filter(xs, fn)]
  } else {
    return [...filter(xs, fn)]
  }
}
```

可以简化为

```JavaScript
const filter = ([x, ...xs], fn) => def(x)
    ? fn(x)
        ? [x, ...filter(xs, fn)] : [...filter(xs, fn)]
    : []
```

示例：

```JavaScript
const even = x => x % 2 === 0
const odd = x = !even(x)
const array = [1,2,3,4,5]

filter(array, even) // [2,4]
filter(array, odd) // [1,3,5]
```

### Reject

与筛选器相反，返回一个不通过筛选器函数的数组。

```JavaScript
const reject = ([x, ...xs], fn) => {
  if (undef(x)) return []
  if (!fn(x)) {
    return [x, ...reject(xs, fn)]
  } else {
    return [...reject(xs, fn)]
  }
}
```

示例：

```JavaScript
const even = x => x % 2 === 0
const array = [1,2,3,4,5]

reject(array, even) // [1,3,5]
```

### Partition

将一个数组分成两个数组。一个是其项通过筛选函数的，另一个是其项失败的。

```JavaScript
const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)]
```

示例：

```JavaScript
const even = x => x % 2 === 0
const array = [0,1,2,3,4,5]

partition(array, even) // [[0,2,4], [1,3,5]]
```

### Reduce

MDN: 对累加器和数组中的每个元素(从左到右)应用的一个函数，将其结果汇总为单个返回值。

```JavaScript
const reduce = ([x, ...xs], fn, memo, i) => {
  if (undef(x)) return memo
  return reduce(xs, fn, fn(memo, x, i), i + 1)
}
```

Which can be simplified as:

```JavaScript
const reduce = ([x, ...xs], fn, memo, i = 0) => def(x)
    ? reduce(xs, fn, fn(memo, x, i), i + 1) : memo
```

示例：

```JavaScript
const sum = (memo, x) => memo + x
reduce([1,2,3], sum, 0) // 6

const flatten = (memo, x) => memo.concat(x)
reduce([4,5,6], flatten, [1,2,3]) // [1,2,3,4,5,6]
```

### ReduceRight

与reduce相似，但是从右到左应用函数。

```JavaScript
const reduceRight = (xs, fn, memo) => reduce(reverse(xs), fn, memo)
```

示例：

```JavaScript
const flatten = (memo, x) => memo.concat(x)

reduceRight([[0,1], [2,3], [4,5]], flatten, []) // [4, 5, 2, 3, 0, 1]
```

### Partial

通过填充任意数量的参数部分应用函数。

```JavaScript
const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)
```

示例：

```JavaScript
const add = (x,y) => x + y
const add5to = partial(add, 5)

add5to(10) // 15
```

### SpreadArg

将接受数组的函数转换为接受多个参数的函数。这在部分应用时非常有用。

```JavaScript
const spreadArg = (fn) => (...args) => fn(args)
```

示例：

```JavaScript
const add = ([x, ...xs]) => def(x) ? parseInt(x + add(xs)) : []
add([1,2,3,4,5]) // 15

const spreadAdd = spreadArg(add)
spreadAdd(1,2,3,4,5) // 15
```

如果你只想定义一个函数，你可以把它写成

```JavaScript
const add = spreadArg(([x, ...xs]) => def(x) ? parseInt(x + add(...xs)) : [])
add(1,2,3,4,5) // 15
```

在上面的示例中，需要记住传递给递归函数的展开数组是使用展开的参数实现的。

### ReverseArgs

反转函数参数的顺序。

```JavaScript
const reverseArgs = (fn) => (...args) => fn(...reverse(args))
```

示例：

```JavaScript
const divide = (x,y) => x / y
divide(100,10) // 10

const reverseDivide = reverseArgs(divide)
reverseDivide(100,10) // 0.1
```

对于部分应用参数来说，反向参数可能很有用。有时您希望使用部分列表末尾的参数，而不是列表开头的参数。翻转参数将允许我们做到这一点。

```JavaScript
const percentToDec = partial(reverseDivide, 100)

percentToDec(25) // 0.25
```

### Pluck

提取数组中的属性值。与 map 函数结合使用时非常有用。

```JavaScript
const pluck = (key, object) => object[key]
```

示例：

```JavaScript
const product = {price: 15}
pluck('price', product) // 15

const getPrices = partial(pluck, 'price')
const products = [
  {price: 10},
  {price: 5},
  {price: 1}
]
map(products, getPrices) // [10,5,1]
```

### Flow

每个函数使用之前的函数的返回值。

```JavaScript
const flow = (...args) => init => reduce(args, (memo, fn) => fn(memo), init)
```

示例：

```JavaScript

const getPrice = partial(pluck, 'price')
const discount = x => x * 0.9
const tax = x => x + (x * 0.075)
const getFinalPrice = flow(getPrice, discount, tax)

// looks like: tax(discount(getPrice(x)))
// -> get price
// -> apply discount
// -> apply taxes to discounted price

const products = [
  {price: 10},
  {price: 5},
  {price: 1}
]

map(products, getFinalPrice) // [9.675, 4.8375, 0.9675]
```

### Compose

与 flow 相同，但是参数使用时的顺序相反。Compose 与函数的编写方式更自然更匹配。使用与 flow 函数定义相同的数据：


```JavaScript
const compose = (...args) => flow(...reverse(args))
```

示例：

```JavaScript
const getFinalPrice = compose(tax, discount, getPrice)

// looks like: tax(discount(getPrice(x)))

map(products, getFinalPrice) // [9.675, 4.8375, 0.9675]
```

### Min

返回数组中最小的数字。如果提供的数组为空，则返回 Infinity。

```JavaScript
const min = ([x, ...xs], result = Infinity) => def(x)
    ? x < result
        ? min(xs, x)
        : result
    : result
```

示例：

```JavaScript
const array = [0,1,2,3,4,5]

min(array) // 0
```

### Max

返回数组中最大的数字。如果数组是空的，返回 Infinity。


```JavaScript
const max = ([x, ...xs], result = -Infinity) => def(x)
    ? x > result
        ? max(xs, x)
        : max(xs, result)
    : result
```

示例：

```JavaScript
const array = [0,1,2,3,4,5]

max(array) // 5
```

### Factorial

返回一个数的阶乘。使用一个累加器来允许替换堆栈帧以允许返回更大的阶乘。

```JavaScript
const factorial = (x, acum = 1) => x ? factorial(x - 1, x * acum) : acum
```

示例：

```JavaScript
factorial(5) // 120
```

### Fibonacci

返回给定位置的斐波那契数。

```JavaScript
const fib = x => x > 2 ? fib(x - 1) + fib(x - 2) : 1
```

示例：

```JavaScript
fib(15) // 610
```

### Quicksort

对数组从小到大排序。通过重新排序数组来实现的，使其包含两个子数组，一个值较小，另一个值较大。使用递归应用于每个子数组，直到没有数组剩下，然后使用 flatten 函数返回排序后的数组。

```JavaScript
const quicksort = (xs) => length(xs)
  ? flatten([
    quicksort(filter(tail(xs), x => x <= head(xs))),
    head(xs),
    quicksort(filter(tail(xs), x => x > head(xs)))
  ])
  : []
```

这也可以通过 partition 函数来实现，但需要赋值给一个新的变量。

```JavaScript
const quicksort = (array) => {
  if (!length(array)) return []
  const [less, more] = partition(tail(array), x => x < head(array))
  return flatten([quicksort(less), head(array), quicksort(more)])
}
```

示例：

```JavaScript
const array = [8,2,6,4,1]

quicksort(array) // [1,2,4,6,8]
```

### 所有函数都是 Reduce

上面的许多功能都可以转换为 reduce 函数，这在大多数情况下也会提高性能。这也彰显了reduce 函数的灵活性。

```JavaScript
const reduce = ([x, ...xs], f, memo, i = 0) => def(x)
    ? reduce(xs, f, f(memo, x, i), i + 1) : memo

const reverse = xs => reduce(xs, (memo, x) => [x, ...memo], [])

const length = xs => reduce(xs, (memo, x) => memo + 1, 0)

const map = (xs, fn) => reduce(xs, (memo, x) => [...memo, fn(x)], [])

const filter = (xs, fn) => reduce(xs, (memo, x) => fn(x)
    ? [...memo, x] : [...memo], [])

const reject = (xs, fn) => reduce(xs, (memo, x) => fn(x)
    ? [...memo] : [...memo, x], [])

const first = (xs, n) => reduce(xs, (memo, x, i) => i < n
    ? [...memo, x] : [...memo], [])

const last = (xs, n) => reduce(xs, (memo, x, i) => i >= (length(xs) - n)
    ? [...memo, x] : [...memo], [])

const merge = spreadArg(xs => reduce(xs, (memo, x) => [...memo, ...x], []))

const flatten = xs => reduce(xs, (memo, x) => x
    ? isArray(x) ? [...memo, ...flatten(x)] : [...memo, x] : [], [])

const add = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo + y, x))

const divide = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo / y, x))

const multiply = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo * y, x))
```

示例：

```JavaScript
reverse([1,2,3]) // [3,2,1]
length([1,2,3]) // 3
map([1,2,3], double) // [2,3,4]
filter([1,2,3,4], even) // [2,4]
reject([1,2,3,4], even) // [1,3]
first([1,2,3,4], 3) // [1,2,3]
last([1,2,3,4], 2) // [3,4]
merge([1,2,3],[4,5,6]) // [1,2,3,4,5,6]
flatten([1,[2,3,[4,[5,[[6]]]]]]) // [1,2,3,4,5,6]
add(1,2,3,4,5) // 15
multiply(2,5,10) // 100
divide(100,2,5) // 10
```

### 圆满完成

我希望这篇文章能帮助我们深入了解 JavaScript 和 ES6 提供的一些设计模式。很多问题可以用迭代或者循环来解决，当然也可以使用递归函数。我希望本文还能够向您展示 reduce 函数的灵活性。

