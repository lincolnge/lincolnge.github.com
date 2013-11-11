---
layout: post
title: python |=
categories:
- Python
tags:
- it
- Python
---
{% include JB/setup %}

    今天遇到一个新的运算符合 |= 一竖加等号

    问行之大哥，大哥说他也是第一次见，然后他自己试验+我自己试验得出如下结论：

    1、
    t = -3
    x = 0
    x |= t
    print x
    如果x取0，则 运算结果为t的值

    2、
    t = 1
    x = -3
    x |= t
    print x
    如果x取负数，t为非负数，则结果为x

    3、
    t = 1
    x = -3
    x |= t
    print x
    如果x取负数，t负数，则结果为-1

    4、
    t = -1
    x = 1
    x |= t
    print x
    如果x取正数，t为负数，则结果为-1

    5、
    t = 3
    x = 1
    x |= t
    print x
    如果x去正数，t比x大，则结果为t

    6、
    t = 3
    x = 4
    x |= t
    print x
    如果x为正数，t为正数且t比x小，则结果为x+t
