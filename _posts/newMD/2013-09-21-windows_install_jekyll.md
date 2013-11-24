---
layout: post
title: windows安装jekyll
categories:
- programming
tags:
- ruby
- windows
---
{% include JB/setup %}

## Jekyll

jekyll是一个简单的免费的Blog生成工具，它只是一个生成静态网页的工具，可以使用第三方服务，类似disqus作为它的评论。最关键的是它可以免费部署在Github上，并且绑定自己的域名。

windows 8 系统似乎还有问题，未解决

## 下载
下载：[ruby on windows](http://rubyinstaller.org/downloads/)
下载：[Devkit](http://rubyinstaller.org/add-ons/devkit/)

## 安装
安装RubyInstaller到c盘
设置环境变量，path中配置形如C:\Ruby193\bin目录，然后在命令行终端下输入`gem update --system`来升级gem  
Devkit解压到C:\DevKit

    $ cd C:\DevKit
    $ ruby dk.rb init
    $ ruby dk.rb install

上面这段code的目的是让Devkit目录下的config.yml中有形如  
`- C:/Ruby193`
e.g.
![](http://bcs.duapp.com/blogma//blog/201309//5A95C53B-C071-4FDA-ADF8-D360F12B3774.png)

最后

    $ gem install jekyll

启动服务器

    $ jekyll server

服务器地址为：<http://127.0.0.1:4000>
完毕

## 问题答疑：
![](http://bcs.duapp.com/blogma//blog/201309//37313619-900D-49FE-A23F-F795A45B5000.png)
这个问题是源于没有安装成功Devkit

## References:
* purediy。[\[原\]通过GitHub Pages建立个人站点（详细步骤）。](http://www.cnblogs.com/purediy/archive/2013/03/07/2948892.html)2013年3月7日。
* [Running Jekyll on Windows](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html)