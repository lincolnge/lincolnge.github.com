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

`$ git rebase -i <commit>` 这个命令就是列出到指定 commit 的所有 commit，然后我们可以对这些 commit 进行操作，比如说删掉某几个 commit、合并某几个、调换某几个 commit 的顺序。

原本我们的 git flow 是：

    * ed4c919 add draft
    *   f105e3d Merge pull request #11 from lincolnge/release
    |\
    | * 3f90bbf Update css and about
    |/
    * 27729ba Update style guide
    * 17aa86b Add copywriter style and update about.
    * 3d60303 Update content ponctuation

执行 `$ git rebase -i HEAD~5`，没有进行任何操作，就退出，执行 `￥ git log --oneline --graph --decorate --all` 可以看到，现在我们的 git flow 是：

    * f423ed9 (HEAD -> test) add draft
    | * 79bdd26 (origin/master, origin/HEAD, master) add post git back to the future
    | * ed4c919 add draft
    | *   f105e3d Merge pull request #11 from lincolnge/release
    | |\
    | |/
    |/|
    * | 3f90bbf Update css and about
    |/
    * 27729ba Update style guide
    * 17aa86b Add copywriter style and update about.
    * 3d60303 Update content ponctuation

我们可以认为 `git rebase` 操作把我们的 commit 给捋平了。就是当前 branch 的分支变成这样了。（`$ git log --oneline --graph --decorate`，去掉远程的 git flow，可以看得更清晰一些。）

    * f423ed9 (HEAD -> test) add draft
    * 3f90bbf Update css and about
    * 27729ba Update style guide
    * 17aa86b Add copywriter style and update about.
    * 3d60303 Update content ponctuation

原本那个 merge 操作产生的 commit 被删掉了。

这里可以插一段，解决冲突。当我们发完 PR 的时候，产生冲突了，这个时候要在本地解决这个冲突，我们可以使用 git rebase 或 git merge 去解决冲突，区别就是 git merge 会多产生一个 commit，然后使用 git rebase 会更改你这个 PR 里 所有 commit 的 hash 值。然后当你发现你解决冲突的时所做的操作有问题时，git merge 更容易进行回溯的操作，直接 git reset 即可。

    # Commands:$
    # p, pick = use commit$
    # r, reword = use commit, but edit the commit message$
    # e, edit = use commit, but stop for amending$
    # s, squash = use commit, but meld into previous commit$
    # f, fixup = like "squash", but discard this commit's log message$
    # x, exec = run command (the rest of the line) using shell$
    # d, drop = remove commit$

看看我们的 rebase -i 里面的有的操作。默认都是 pick。

    pick 3d60303 Update content ponctuation$
    pick 17aa86b Add copywriter style and update about.$
    pick 27729ba Update style guide$
    pick 3f90bbf Update css and about$
    pick 86a43d2 add draft$

比如把第二个 pick 改成 r，

    pick 3d60303 Update content ponctuation$
    r 17aa86b Add copywriter style and update about.$
    pick 27729ba Update style guide$
    pick 3f90bbf Update css and about$
    pick 86a43d2 add draft$

保存并退出，发现我们到了 `Add copywriter style and update about.` 这个状态的时间点。我们可以对这个 commit 的 comment 进行操作，更改这个 commit comment。

     NORMAL ▶▶ .git/rebase-merge/git-rebase-todo[+]                                                                                      ◀ gitrebase ◀ utf-8[unix] ◀   8% ¶   2:  2  ◀
    ".git/rebase-merge/git-rebase-todo" 24L, 842C [w]
    Rebasing (2/5)
    Add copywriter style and update about, change cimmit comment.$
    $
    # Please enter the commit message for your changes. Lines starting$
    # with '#' will be ignored, and an empty message aborts the commit.$
    #$
    # Author:    lincolnge <326684793@qq.com>$
    # Date:      Sat May 21 22:06:21 2016 +0800$
    #$
    # interactive rebase in progress; onto b2811ee$
    # Last commands done (2 commands done):$
    #    pick 3d60303 Update content ponctuation$
    #    r e18bd53 Add copywriter style and update about, change cimmit comment.$
    # Next commands to do (3 remaining commands):$
    #    pick e256546 Update style guide$
    #    pick 69c9c89 Update css and about$
    # You are currently editing a commit while rebasing branch 'test' on 'b2811ee'.$
    #$
    # Changes to be committed:$
    #»——————new file:   _posts/2016-05-21-copywriting-style-guid.md$
    #»——————modified:   about.md$
    #$

对 commit comment 修改并保存，保存完后，发现我们又重新回到了现在。重新执行 `$ git log --oneline --graph --decorate`，我们会看到我们的 commit comment 变了：

    * 5c952ba (HEAD -> test) add draft
    * 0a8c12c Update css and about
    * 2dc468e Update style guide
    * 8f265f0 Add copywriter style and update about, change cimmit comment.
    * 3d60303 Update content ponctuation

这就是我们对过去进行了矫正，然后影响了我们的未来。

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

## Reference:

- <https://git-scm.com/docs/git-rebase>
