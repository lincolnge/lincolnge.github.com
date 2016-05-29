---
layout: post
title: "Git 回到未来"
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

执行 `$ git rebase -i HEAD~5`，没有进行任何操作，就退出，执行 `$ git log --oneline --graph --decorate --all` 可以看到，现在我们的 git flow 是：

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

    # r, reword = use commit, but edit the commit message$
    # e, edit = use commit, but stop for amending$
    # s, squash = use commit, but meld into previous commit$
    # f, fixup = like "squash", but discard this commit's log message$
    # x, exec = run command (the rest of the line) using shell$
    # d, drop = remove commit$

看一下我们剩下的还有什么命令，edit、squash、fixup、exec、drop。顾名思义，edit 就是回到我们过去的那个时间点，然后对当时的 commit 进行修改，你可以直接在那个 commit 时间下添加新的 commit 或者你做你想做的任何一件事，结束后就执行 `git rebase --continue` 回到未来。

在 edit 状态下，我们同样可以执行 `git rebase --edit-todo` 看未来的 commit 或者对未来的 commit 执行类似 edit、squash、fixup、exec、drop 操作。

- squash 就是把指定的 commit 与它之前的 commit 合并，比如说你写了很多 fix bug、fix bug 的 commit，可以用这个 squash 统一变成一个 commit。
- fixup 与 squash 类似，但是它放弃了自己的部分权利，就是修改 commit comment 的信息。直接就合到它之前的 commit 了。
- drop 放弃这个 commit
- exec 也是一个很有趣的命令，它能让你到某个过去，然后执行指定的命令。

如下：

    pick 3d60303 Update content ponctuation$
    exec npm run test
    pick 17aa86b Add copywriter style and update about.$
    exec npm run test
    pick 27729ba Update style guide$
    exec npm run test
    pick 3f90bbf Update css and about$
    exec npm run test
    pick 86a43d2 add draft$

友情提示，我们在解决冲突的时候有个命令叫 `$ git rebase --skip`，可以认为是去掉冲突的代码，也就是和遵从 git rebase <branch0>，branch0 的那个分支。

## git cherry-pick

这个命令相对于 git rebase 来说，简单得多了，它就是把某个 commit 提取出来，放置到当前 branch 的 HEAD 上。

    $ git cherry-pick 27729ba 17aa86b 3d60303 b2811ee f891ff0 7d3e6ae 7256dc9 30cb9d5 d9c90e4
    [test 1de481e] Update style guide
    Author: lincolnge <326684793@qq.com>
    Date: Sat May 21 22:07:37 2016 +0800
    1 file changed, 4 insertions(+)
    [test a5b1c9b] Add copywriter style and update about.
    Author: lincolnge <326684793@qq.com>
    Date: Sat May 21 22:06:21 2016 +0800
    2 files changed, 23 insertions(+), 2 deletions(-)
    create mode 100644 _posts/2016-05-21-copywriting-style-guid.md
    error: could not apply 3d60303... Update content ponctuation
    hint: after resolving the conflicts, mark the corrected paths
    hint: with 'git add <paths>' or 'git rm <paths>'
    hint: and commit the result with 'git commit'

遇到冲突（conflict），

    hint: after resolving the conflicts, mark the corrected paths
    hint: with 'git add <paths>' or 'git rm <paths>'
    hint: and commit the result with 'git commit'

这三句就是冲突的意思了。解决一下冲突，然后执行 `$ git cherry-pick --continue`，不像 git rebase，git cherry-pick 没有 --skip 方法。和 rebase 一样可以执行 `git cherry-pick --abort` 终止命令。

## git filter-branch

`git filter-branch` 这个命令非常强大，可以批量改写历史，当前 branch 中所有的 commit 的历史或者所有分支，可以选择适用的范围。

批量删除指定的 filename 文件：

    $ git filter-branch --tree-filter 'rm -f filename' -- --all

例如：

    $ git filter-branch --tree-filter 'rm -f test' -- --all
    Cannot rewrite branches: You have unstaged changes.

当然当前不能有修改，可以先执行 `$ git stash` 命令。

    $ git filter-branch --tree-filter 'rm -f test' -- --all
    Cannot create a new backup.
    A previous backup already exists in refs/original/
    Force overwriting the backup with -f

出现这一句说明之前曾经执行过 git filter-branch，然后在 refs/original/ 有一个备份，这个时候只要删掉那个备份即可，删除备份命令为 `git update-ref -d refs/original/refs/heads/master`，或执行 `$ git filter-branch -f --tree-filter -f 'rm -f test' -- --all`。

    $ git filter-branch -f --tree-filter 'rm -f test' -- --all
    Rewrite 283f0899973f574fd879f565b69da2705dc3ede7 (406/412) (24 seconds passed, remaining 0 predicted)
    WARNING: Ref 'refs/heads/master' is unchanged
    WARNING: Ref 'refs/heads/release' is unchanged
    Ref 'refs/heads/test' was rewritten
    Ref 'refs/heads/test2' was rewritten
    Ref 'refs/heads/test3' was rewritten
    Ref 'refs/heads/test4' was rewritten
    Ref 'refs/heads/test5' was rewritten
    Ref 'refs/heads/test6' was rewritten
    WARNING: Ref 'refs/remotes/origin/master' is unchanged
    WARNING: Ref 'refs/remotes/origin/master' is unchanged
    WARNING: Ref 'refs/remotes/origin/release' is unchanged
    WARNING: Ref 'refs/stash' is unchanged

看看改了什么 `$ git status`：

    $ git st
    On branch master
    Your branch is ahead of 'origin/master' by 2 commits.
      (use "git push" to publish your local commits)
    nothing to commit, working directory clean

看看 `.git/refs/original/` 里有啥：

    $ l .git/refs/original/refs/heads/
    total 24K
    drwxr-xr-x 8 wanggengzhou staff 272 May 30 00:12 ./
    drwxr-xr-x 3 wanggengzhou staff 102 May 30 00:09 ../
    -rw-r--r-- 1 wanggengzhou staff  41 May 30 00:11 test
    -rw-r--r-- 1 wanggengzhou staff  41 May 30 00:11 test2
    -rw-r--r-- 1 wanggengzhou staff  41 May 30 00:11 test3
    -rw-r--r-- 1 wanggengzhou staff  41 May 30 00:11 test4
    -rw-r--r-- 1 wanggengzhou staff  41 May 30 00:12 test5
    -rw-r--r-- 1 wanggengzhou staff  41 May 30 00:12 test6

    $ cat .git/refs/original/refs/heads/test
    a1029f5cce896f6d65dfbc5edfcf3487459aad3b

`refs/original/` 里保存的就是 hash 值。其他命令介绍。

更改历史提交中某一提交者的姓名及邮件地址。

    $ git filter-branch --commit-filter '
          if [ "$GIT_AUTHOR_NAME" = "WangGengZhou" ]; then
              GIT_AUTHOR_NAME="lincolnge"
              GIT_AUTHOR_EMAIL="326684793@qq.com"
          fi
          git commit-tree "$@";
          ' HEAD

为了避免因操作错误造 repo 损坏，git 会在 filter-branch 操作实际改写历史时，自动将原 refs 备份到 refs/original/ 下。

## Reference:

- Git Documentation. <https://git-scm.com/docs/git-rebase>
- Git Documentation. <https://git-scm.com/docs/git-cherry-pick>
- Git Documentation. <https://git-scm.com/docs/git-filter-branch>
- GotGit. <http://www.worldhello.net/gotgit/06-migrate/050-git-to-git.html>
- loveky的一亩三分地. <http://loveky2012.blogspot.com/2012/08/git-command-git-filter-branch.html>
