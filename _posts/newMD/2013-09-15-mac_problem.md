---
layout: post
title: MAC PROBLEMS
categories:
- MAC platforms
tags:
- MAC
status: publish
type: post
published: true
---

## MAC command line

### mdfind
`mdfind` can find something in mac

### cal
`cal` launch a calendar

### start/stop apache:

    $ sudo apachectl start
    $ sudo apachectl stop

### remove dir:
`rm -rf dir`

## brew install

### Install homebrew

mac install homebrew，we can use git as from: <http://blog.jjgod.org/2009/12/21/homebrew-package-management/>
    
    $ sudo chown -R `wanggengzhou` /usr/local
    $ cd /usr/local
    $ git init
    $ git remote add origin git://github.com/mxcl/homebrew.git
    $ git pull origin master

Testing: brew search

### install ruby:

    $ brew install ruby

Configure the path: PATH=$(brew --prefix ruby)/bin:$PATH

    $ vim ~/.bash_profile

input: `export PATH=$(brew --prefix ruby)/bin:$PATH`

### install jekyll：

    $ gem update --system
    $ gem install jekyll

## mac vim

### vimrc configure

    $ sudo vim /usr/share/vim/vimrc

input: 

    set ai                  " auto indenting
    set history=100         " keep 100 lines of history
    set ruler               " show the cursor position
    syntax on               " syntax highlighting
    set hlsearch            " highlight the last searched term
    filetype plugin on      " use the file type plugins

    " When editing a file, always jump to the last cursor position
    autocmd BufReadPost *
    \ if ! exists("g:leave_my_cursor_position_alone") |
    \ if line("'\"") > 0 && line ("'\"") < = line("$") |
    \ exe "normal g'\"" |
    \ endif |
    \ endif


## File System
The path of QQ information: `~/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ`


## Questions：

### can't open file for writing
Maybe the file owner becomes root


### Permission denied
cannot open .git/FETCH_HEAD: Permission denied

    sudo chown -R .git/

mac ssh need not to be root accout


Lauchpad icon information is in `~/Library/Application\ Support/Dock/*.db`
