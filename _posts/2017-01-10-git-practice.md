---
layout: post
title: "git 实践"
date_time: "2017-01-10 22:44:28 +0800"
description: ""
category:
- programming
tags:
---
{% include JB/setup %}

### 背景

- 某同学在指定分支上做了修改，但是执行 fetch 的时候并没有认真看 fetch 后的提示（reject）。复盘的时候发现是该同学脑中认为自己本地没有该分支，git fetch 是不会有任何 reject 的可能性，因此并没有认真看 fetch 后的提示。（目前暂无办法解决不看 git 操作后的 message 的问题）

### 问题

- 有一个 dirty commit 并且已经合到了 master。
- 合到 master 的分支为了解决冲突使用了 git rebase。

![](/files/images/623C22E1EF012B3376F3B5CFD4A055C7.jpeg)
图片由[子龙](http://borninsummer.com/)提供，感谢子龙。

### 目标

- 尽可能让所有相同的 commit 只出现一次。
- 尽可能使用少的命令。

### 操作流程

- 复盘：重新回顾整个流程，看哪个步奏发生了问题，该如何解决。

#### git 操作

- 在正确的分支下使用 git merge master。解决此时放生的所有冲突。（如果在这个时候直接使用 git rebase master，将需要面临很多次 commit 产生的冲突，产生冲突后直接用 git rebase --skip 可能会错过自己期望的代码）
- git reset --soft HEAD~ 保留最后修改的冲突代码。
- git stash
- git rebase master 遇到冲突后直接 git rebase --skip（由于该分支下有多个 commit，因此需要执行多次 git rebase --skip）。
- git stash pop
- git add .
- git ci -m ‘Add: 添加修改’

最后解决问题。
