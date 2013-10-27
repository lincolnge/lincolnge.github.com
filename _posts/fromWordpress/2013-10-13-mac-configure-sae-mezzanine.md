---
layout: post
title: MAC Configure sae mezzanine
categories:
- Science and Technology
tags:
- MAC
- python
- sae
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  duoshuo_thread_id: '1365771562581491761'
---

## Install sae

At first, we need to install python(2.7), pip.

    $ [sudo] pip install virtualenv
    $ ~/: virtualenv sae # install sae
    $ ~/: source ~/sae/bin/activate # launch sae


Generally， we need to install(using pip install package)  
+ sae-python-dev,  
+ django(django==1.5) or webpy,  
+ mysqldb(mysql-python),  
+ pylibmc,  
+ PIL,  
...

launch
  
    dev_server.py --mysql=xxxx:xxxx@localhost:3306 --host=127.0.0.1 --storage-path=/tmp

<h2>Saecloud install mezzanine</h2>


<h2>References:</h2>
* Virtualenv. <em>Installation</em>. <a href="http://www.virtualenv.org/en/latest/" title="virtualenv">http://www.virtualenv.org/en/latest/</a>  
* Marchliu. <a href="http://marchliu.github.io/tech/2013/10/09/sae-developer-env-in-local/" title="sae-python-django">http://marchliu.github.io/tech/2013/10/09/sae-developer-env-in-local/</a>  
* SAE Python Developer's Guide 1.0(beta) documentation <a href="http://python.sinaapp.com/doc/tools.html#howto-use-saecloud-install" title="SAE Python Developer's Guide 1.0(beta) documentation">http://python.sinaapp.com/doc/tools.html#howto-use-saecloud-install</a>  