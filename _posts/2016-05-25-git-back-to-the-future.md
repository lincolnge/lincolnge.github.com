---
layout: post
title: "git 回到未来"
date_time: "2016-05-25 21:02:46 +0800"
description: ""
category:
- programming
tags:
---
{% include JB/setup %}

## git rebase

修改 commit 的顺序、内容，修改历史。

    $ git rebase -i HEAD~5

    pick 3d60303 Update content ponctuation$
    pick 17aa86b Add copywriter style and update about.$
    pick 27729ba Update style guide$
    pick 3f90bbf Update css and about$
    pick 86a43d2 add draft$
    $
    # Rebase b2811ee..86a43d2 onto b2811ee (5 command(s))$
    #$
    # Commands:$
    # p, pick = use commit$
    # r, reword = use commit, but edit the commit message$
    # e, edit = use commit, but stop for amending$
    # s, squash = use commit, but meld into previous commit$
    # f, fixup = like "squash", but discard this commit's log message$
    # x, exec = run command (the rest of the line) using shell$
    # d, drop = remove commit$
    #$
    # These lines can be re-ordered; they are executed from top to bottom.$
    #$
    # If you remove a line here THAT COMMIT WILL BE LOST.$
    #$
    22  # However, if you remove everything, the rebase will be aborted.$
    #$
    # Note that empty commits are commented out$

## git cherry-pick

把某个 commit 提取出来，放置到当前 branch 的 HEAD 上。

## git filter-branch

批量修改 branch

    $ git filter-branch --tree-filter 'rm -f filename' -- --all

更改历史提交中某一提交者的姓名及邮件地址。

    $ git filter-branch --commit-filter '
          if [ "$GIT_AUTHOR_NAME" = "Xin Jiang" ]; then
              GIT_AUTHOR_NAME="Jiang Xin"
              GIT_AUTHOR_EMAIL="jiangxin@ossxp.com"
              GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"
              GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"
          fi
          git commit-tree "$@";
          ' HEAD

<http://www.worldhello.net/gotgit/06-migrate/050-git-to-git.html>

为了避免因操作错误造repo损坏，git会在filter-branch操作实际改写历史时，自动将原refs备份到refs/original/下。

<http://loveky2012.blogspot.com/2012/08/git-command-git-filter-branch.html>
<https://git-scm.com/docs/git-filter-branch>
