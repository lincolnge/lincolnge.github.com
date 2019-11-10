---
layout: post
title: wubi 安装 Ubuntu
categories:
- science
tags:
- ubuntu
---

## Ubuntu

Ubuntu（乌班图）是一个以桌面应用为主的Linux操作系统，基于Debian GNU/Linux，支持x86、amd64（即x64）和ppc架构，由全球化的专业开发团队（Canonical Ltd）打造的开源GNU/Linux操作系统。为桌面虚拟化提供支持平台。
[百度百科](http://baike.baidu.com/link?url=x3AtS7zTKWpNkwUH08q0Ko2ZsEsoo37H_pZVyH4NNIZAFKyICX-NrIFmMdZqEMpV)

Ubuntu下载地址：
<http://www.ubuntu.org.cn/download/desktop>

可以考虑12.04版本，当然也可以考虑新版13.04

用挂载下载的iso文件，我用的是DAEMON挂载

Daemon下载地址：
<http://www.daemon-tools.cc/chn/products/dtLite#features>

打开挂载的文件夹
将wubi这个文件拷到任何位置，运行wubi，配置一些基本的设置，接着它就开始安装了，安装完后，提示重启，重启后在启动项上指定ubuntu，ubuntu将自动安装，安装完后将自动重启。

PS：

+ 记得要挂载那个iso文件，不然wubi会重新下载ubuntu到某临时文件夹，这将耗费大量时间
+ 可以考虑断网，因为有网络，ubuntu将需要下载安装一些必要的文件。不过断网的话，安装可能会出错，感觉这算是一个概率问题。
+ 另外13.04的版本的wubi貌似对应的是64位系统，这意味着，你的镜像挂载要挂载64位系统版本的ubuntu，不然它会联网下载64位Ubuntu。


倘若ubuntu开机进不了桌面，可以通过重装桌面修复它。

ubuntu12.04已经自带了ibus输入法框架和一些中文输入法。
想要谷歌输入法可以移步到
[ubuntu 下的 google 拼音输入法](http://www.cnblogs.com/yejinru/archive/2013/03/31/2991851.html)
