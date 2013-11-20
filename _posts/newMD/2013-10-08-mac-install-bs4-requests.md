---
layout: post
title: Mac install bs4 &amp; requests
categories:
- programming
tags:
- Mac
- Python
---
{% include JB/setup %}

As I want to run a crawler which in <a href="https://github.com/lvyaojia/crawler">https://github.com/lvyaojia/crawler</a>

but the error is
from bs4 import BeautifulSoup 
ImportError: No module named bs4

## install BeautifulSoup
So I install bs4
downloaded beautifulsoup
<a href="https://pypi.python.org/pypi/beautifulsoup4" title="https://pypi.python.org/pypi/beautifulsoup4">https://pypi.python.org/pypi/beautifulsoup4
</a>uncompressed it
<pre>
$ cd beautifulsoup4-*
$ sudo python setup.py install
</pre>
and then if you can run 'from bs4 import BeautifulSoup', it means it is ok.

after install bs4, I found the error become
import requests
ImportError: No module named requests

## install request
So I install request
download request
<a href="https://pypi.python.org/pypi/requests" title="https://pypi.python.org/pypi/requests">https://pypi.python.org/pypi/requests
</a>uncompressed it
<pre>
$ cd requests-*
$ sudo python setup.py install
</pre>
and then if you can run 'import requests', it means it is ok.

## References:
+ Jay Kim (Mar 26, 2012). <a href="http://stackoverflow.com/questions/9876226/how-do-i-install-beautiful-soup-for-python-on-my-mac-see-error" title="http://stackoverflow.com/questions/9876226/how-do-i-install-beautiful-soup-for-python-on-my-mac-see-error">http://stackoverflow.com/questions/9876226/how-do-i-install-beautiful-soup-for-python-on-my-mac-see-error</a>
