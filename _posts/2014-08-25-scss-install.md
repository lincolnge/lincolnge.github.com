---
layout: post
title: "SCSS 介绍"
description: ""
category: programming
tags: []
---
{% include JB/setup %}


SCSS 介绍
========

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

SASS 与 SCSS 区别:
----

SASS:  

	#sidebar
		width: 30%
		background-color: #faa

.sass 文件  

---

SCSS:  

	#sidebar {
		width: 30%
		background-color: #faa
	}

.scss 文件  

SCSS 安装
--------

compass (0.12.2)  
sass (3.2.5)  
susy (1.0.7)  

	$ [sudo] gem install compass -v 0.12.2
	$ [sudo] gem install sass -v 3.2.5
	$ [sudo] gem install susy -v 1.0.7

如果直接用 gem install 安装会安装最新版, 最新版不知道什么原因没有办法使用.


基本命令
--------

创建工程: 
	
	$ compass create --bare --sass-dir "sass" --css-dir "css" --javascripts-dir "js" --images-dir "images"

or

	$ compass create pp -r susy -u susy

监控: 

	$ compass watch


References: 

- <http://sass-lang.com/>
- <http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better>