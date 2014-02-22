---
layout: post
title: Mac Configure SAE mezzanine
categories:
- programming
tags:
- Mac
- Python
- SAE
---
{% include JB/setup %}

## SAE

SAE作为国内的公有云计算，新浪开发的，安全可靠。我们可以将网站挂在上面运行。

## Mezzanine

Mezzanine是一个强大的，扩展性良好的管理平台，是一种CMS（内容管理系统）。它是建立在Django的框架之上的。

## 配置SAE本地环境

一开始要安装ython(2.7)，接着如下操作安装`virtualenv`并且运行`virtualenv`：

    $ [sudo] pip install virtualenv
    $ ~/: virtualenv sae # install sae
    $ ~/: source ~/sae/bin/activate # launch sae

source这一句是启动SAE本地环境，启动后 Terminal(终端) 最左会有(sae) 这样的标志，在`virtualenv`环境下，pip安装会安装到`/sae/lib/python2.7/site-packages`文件夹下。

一般来说需要安装下列的Python package (using pip install package) 安装如下的package

+ sae-python-dev,  
+ django(django==1.5) or webpy,  
+ mysqldb(mysql-python),  
+ pylibmc,  
+ PIL,  
...

安装如：

    $ pip install sae-python-dev

pip mysql的安装：

    $ pip install mysql-python

## Saecloud install mezzanine

    $ mkdir mezzanine
    $ cd mezzanine

运行

    $ saecloud install mezzanine
    
由于saecloud安装的问题，此时你的文件夹site-packages里面有很多无用的文件。

    filebrowser_safe/ mezzanine/ requests/ requirements/ grappelli_safe/ oauthlib/ requests_oauthlib/
    
只保留这几个文件。接着运行：

    $ mezzanine-project 1
    $ cd 1
    $ python manage.py createdb --noinput
    $ python manage.py runserver

svn checkout 你的project：

    $ svn co https://svn.sinaapp.com/project_name/

或者新建`config.yaml`文件，输入：

    ---
    name: mezzanine
    version: 1
    libraries:
      - name: django
        version: '1.5'

新建`index.wsgi`文件，输入：

    import os
    import sys

    root = os.path.dirname(__file__)

    sys.path.insert(0, os.path.join(root, 'site-packages'))

    import sae
    import wsgi
    import django.core.handlers.wsgi

    os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'
    os.environ['LANG'] = 'zh_CN.utf8'
    os.environ['LC_ALL'] ='zh_CN.UTF-8'
    os.environ['LC_LANG'] ='zh_CN.UTF-8'

    application = sae.create_wsgi_app(wsgi.application)

执行`python manage.py collectstatic`收集静态文件

修改`setting.py`中的`ROOT_URLCONF = "%s.urls" % PROJECT_DIRNAME`修改为`ROOT_URLCONF = "urls"`，这一句大概在208行。


运行脚本：
  
    $ dev_server.py --mysql=root:root@localhost:3306 --host=127.0.0.1 --storage-path=/tmp

至此本地环境配置完毕。
打包上传到SAE。

## References:
* Virtualenv. <em>Installation</em>. <a href="http://www.virtualenv.org/en/latest/" title="virtualenv">http://www.virtualenv.org/en/latest/</a>  
* Marchliu. <a href="http://marchliu.github.io/tech/2013/10/09/sae-developer-env-in-local/" title="sae-python-django">http://marchliu.github.io/tech/2013/10/09/sae-developer-env-in-local/</a>  
* SAE Python Developer's Guide 1.0(beta) documentation [URL](http://python.sinaapp.com/doc/tools.html#howto-use-saecloud-install)