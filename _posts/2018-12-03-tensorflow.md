---
layout: post
title: "tensorflow"
date_time: "2018-12-03 00:45:45 +0800"
description: ""
category:
- programming
tags:
---
{% include JB/setup %}

# Install TensorFlow

配置指南：

```
# Python3
$ brew install python
# 在 profile 中添加 Python3 环境变量
$ cat ~/.bash_profile
export PATH="/usr/local/opt/python/libexec/bin:$PATH”

$ pip install six bumpy

$ pip install tensorflow
```

注意事项：

`pip install tensorflow` 出错

```
$ pip install https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-1.8.0-py3-none-any.whl
# 装 1.8 的版本使用 TensorFlow 最新代码编译出错，这时应该装最新版的 TensorFlow。
$ pip install https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-1.12.0-py3-none-any.whl
```
https://github.com/tensorflow/tensorflow/issues/20444
