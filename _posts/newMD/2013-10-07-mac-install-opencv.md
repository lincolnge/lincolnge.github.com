---
layout: post
title: Mac install opencv
categories:
- programming
tags:
- Mac
- opencv
---
{% include JB/setup %}

## Install opencv
Download XCode from App Store

Download XCode command tools

Open XCode -> Preferences -> Downloads -> Components -> Command Line Tools

Install ScipySuperpack (https://github.com/fonnesbeck/ScipySuperpack)

    $ git clone https://github.com/fonnesbeck/ScipySuperpack.git
    $ sh install_superpack.sh

Download OpenCV

Extract OpenCV-2.4.2.tar.bz2

Open Terminal at the extracted directory

At OpenCV-2.4.2 directory:

    $ mkdir release 
    $ cd release 
    $ cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D BUILD_NEW_PYTHON_SUPPORT=ON -D BUILD_EXAMPLES=ON ..

Compile with:

    $ make -j8

Install:

    $ sudo make install

## Configuring python with opencv

Update your bash_profile:

    $ echo "export PYTHONPATH=/usr/local/lib/python2.7/site-packages/:$PYTHONPATH" >> ~/.bash_profile

Close and open the Terminal

Open python console and try to import cv2 to test if everything works

    $ python import cv2

## Configuring Eclipse with opencv
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

## ant

### Environment

First, create a bin/ folder and copy the OpenCV jar into it. Second, create a lib/ folder and copy the OpenCV lib into it.

    $ mkdir bin
    $ cp <opencv_dir>/bin/opencv_<version>.jar bin/
    $ mkdir lib
    $ cp -rf <opencv_dir>/lib/ lib/

### Running

    $ ant -DocvJarDir=bin -DocvLibDir=lib

## References:

+ Impetus.(Monday, 5 August 2013). [URL](http://sumitkumariit.blogspot.hk/2013/08/how-to-install-opencv-for-java-on-mac.html)
+ Guilherme Defreitas. (1 de Outubro de 2012). <http://www.guidefreitas.com/installing-opencv-2-4-2-on-mac-osx-mountain-lion-with-python-support>
