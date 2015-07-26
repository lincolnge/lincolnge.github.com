---
layout: post
title: "Sass"
description: ""
category: programming
tags: [CSS, Web 开发]
---
{% include JB/setup %}


Sass 介绍 
========
Syntactically Awesome Stylesheets (Sass)

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

快捷安装
----

如果写好了 Gemfile, 直接在该目录下 `bundle install` 即可.

Gemfile 文件参考:

	gem "compass", "~> 1.0.1"
	gem "sass", "~> 3.4.5"
	gem "susy", "~> 2.1.3"

SASS 与 SCSS 区别:
----

SASS:  

	#sidebar
		width: 30%
		background-color: #faa

*.sass 文件  

---

SCSS:  

	#sidebar {
		width: 30%;
		background-color: #faa;
	}

*.scss 文件  

Sass 安装
--------

	$ [sudo] gem install compass
	$ [sudo] gem install sass
	$ [sudo] gem install susy

如果直接用 gem install 安装会安装最新版, 最新版不知道什么原因没有办法使用.


基本命令
--------

创建工程: 
	
	$ compass create --bare --sass-dir "sass" --css-dir "css" --javascripts-dir "js" --images-dir "images"

or

	$ compass create pp -r susy -u susy

监控: 

	$ compass watch


为什么使用 Sass
--------

- 缩短开发时间。
- "不要重复自己" (DRY) 的准则。
- 使代码更加清晰易读。

References: 

- Sass: Syntactically Awesome Style Sheets. <http://sass-lang.com/>
- Sass vs. SCSS: which syntax is better?. <http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better>