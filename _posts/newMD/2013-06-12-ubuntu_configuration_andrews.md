---
layout: post
title: Ubuntu 配置安卓
categories:
- Science and Technology
tags:
- Android
- Ubuntu
---
{% include JB/setup %}

有问题看问题解答.  

首先下载 Android SDK  

<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115191941_1.jpg" name="image_operate_93601371041564499" />

Android SDK官方下载地址：<http://developer.android.com/sdk/index.html>  

下载Linux 32-bit版本 .

<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115191941_2.jpg" name="image_operate_23491371041594355" />

解压 然后到目录下的tools里面
<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115192903_1.jpg" name="image_operate_13991371041593832" />

输入`$ ./android`启动Android SDK Manager

<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115193246_2.jpg" name="image_operate_44041371041593707" />
勾中Tools和Android 4.2(API 17)，还可以安装以前的Android 4.1.2或者2.3版本，一般我们选择最新版本就好了，因为选择的版本越多下载时间就越长。SDK可以向下兼容, 意思就是4.2版本可以运行2.3 不过2.3 不一定可以运行4.2
<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115193422_1.jpg" name="image_operate_75751371041617547" />
选中后，点击右下角的Install 5 packages...
<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115193422_2.jpg" />


这时就开始在线下载文件了，时间会比较长，中途如果弹出错误窗口也不用管，等待下载完成。

跟windows环境安装安卓模拟器不一样，linux环境下需要用命令来建立模拟器。

首先在终端中输入

`$ ./mksdcard 512M mysd01`

上面的512M是指虚拟机的SD卡大小，mysd01是指卡的名称，大小和名称可以更改为别的。

    $ ./android create avd -n myphone01 -t 2

创建虚拟手机设备，这里的myphone01是指虚拟机名称，也可以更改。

<img title="ubuntu配置安卓" alt="ubuntu配置安卓" src="/files/images/1_130115203734_1.jpg" name="image_operate_11581371041651123" />

出现上面这种提示就表示模拟器建立好了

    Auto-selecting single ABI armeabi-v7a
    Created AVD 'myphone01' based on Google APIs (Google Inc.), ARM (armeabi-v7a) processor,
    with the following hardware config:
    hw.lcd.density=240
    vm.heapSize=48
    hw.ramSize=512

最后运行模拟器

    $ sudo ./emulator @myphone01 -sdcard mysd01 -scale 0.8

不过上面这一块其实不用处理的, 因为你只要直接插上手机, eclipse运行的程序直接在手机上面跑. 

问题解答:
一开始敲入这个命令: `$ ./android`

bash: ./android: 权限不够
 
<p style="margin: 0px; padding: 0px; line-height: 30px; font-family: 宋体; background-color: #ffffff;">chmod a+x 可以增加权限</p>

输入: `$ chmod a+x ./android`
然后输入 `$ ./android` 即可.

    Failed to get the adb version: Cannot run program "/media/m_backup/Setup_Files/Programing/android-sdk-linux/platform-tools/adb": java.io.IOException: error=13, 权限不够 from '/media/m_backup/Setup_Files/Programing/android-sdk-linux/platform-tools/adb' - exists=true

在sdk文件夹里面输入`~/android-sdk$ sudo chmod -R a+wrx *`
注意: 因为坑爹的XX墙, 所以改HOSTS进 <a href="https://developer.android.com/sdk/index.html">https://developer.android.com/sdk/index.html</a>

## References:

+ ubuntu下编译Android出现的问题
<a href="http://zuiniuwang.blog.51cto.com/3709988/718277">URL</a>
+ ubuntu系统安装安卓模拟器(Android SDK)的方法
<a href="http://www.anzhuobuluo.com/android/rom/142/">http://www.anzhuobuluo.com/android/rom/142/</a>
+ Ubuntu配置Eclipse + Android环境问题
(安卓adb权限问题)
<a href="http://bbs.csdn.net/topics/390062677">http://bbs.csdn.net/topics/390062677</a>
