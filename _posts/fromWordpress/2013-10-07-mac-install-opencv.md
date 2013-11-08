---
layout: post
title: Mac install opencv
categories:
- opencv
tags:
- MAC
- opencv
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  duoshuo_thread_id: '1365771562581491759'
---

<h2>install opencv</h2>
Download XCode from App Store

Download XCode command tools

Open XCode -> Preferences -> Downloads -> Components -> Command Line Tools

Install ScipySuperpack (https://github.com/fonnesbeck/ScipySuperpack)

<pre>
$ git clone https://github.com/fonnesbeck/ScipySuperpack.git
$ sh install_superpack.sh
</pre>

Download OpenCV

Extract OpenCV-2.4.2.tar.bz2

Open Terminal at the extracted directory

At OpenCV-2.4.2 directory:
<pre>
$ mkdir release cd release cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D BUILD_NEW_PYTHON_SUPPORT=ON -D BUILD_EXAMPLES=ON ..
</pre>
Compile with:

<pre>$ make -j8</pre>

Install:

<pre>$ sudo make install</pre>

<h2>Configuring python with opencv</h2>

Update your bash_profile:

<pre>$ echo "export PYTHONPATH=/usr/local/lib/python2.7/site-packages/:$PYTHONPATH" >> ~/.bash_profile</pre>

Close and open the Terminal

Open python console and try to import cv2 to test if everything works

<pre>$ python import cv2</pre>

<h2>Configuring Eclipse with opencv</h2>
Open eclipse
Click on File-> New Project-> Java Project
Give an appropriate Project Name
Now right click on Project and choose Properties.

Select Java Build Path and then select Libraries.

Click on Add Library.

Choose User Library.
Click on User Libraries, then Select New and give a name to your library.

Now Select your library and click on Add External JARs, go to your build folder and then open bin folder, there you will find opencv-246.jar, Select this file.
(this folder is /opencv/release/bin or /opencv/build/bin)
Now Select Native Library Location and click on Edit.

Insert the path of your cv.so file, mine is in /build/lib.
(this path maybe /opencv/release/lib or /opencv/build/lib)
Click on Finish, Now your project is configured with openCV library.

<h2>References:</h2>

+ Impetus.(Monday, 5 August 2013). <http://sumitkumariit.blogspot.hk/2013/08/how-to-install-opencv-for-java-on-mac.html>
Guilherme Defreitas. (1 de Outubro de 2012). <http://www.guidefreitas.com/installing-opencv-2-4-2-on-mac-osx-mountain-lion-with-python-support>
