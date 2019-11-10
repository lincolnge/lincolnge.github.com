---
layout: post
title: 安卓SD卡输入输出
categories:
- science
tags: [Android]
---


1、首先AndroidManifest.xml里面要写权限，如下：

    <!-- 在SDCard中创建与删除文件权限 -->
    <uses -permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"></uses>
    <!-- 往SDCard写入数据权限 -->
    <uses -permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses>

<div>或</div>

    <uses -sdk android:minSdkVersion="3"></uses>

<div><a href="/files/images/626a2e8dgd898e2e2cce0.jpg" target="_blank"><img title="安卓SD卡输入输出" alt="安卓SD卡输入输出" src="/files/images/626a2e8dgd898e2e2cce0.jpg" width="353" height="133" name="image_operate_46701364051109023" /></a><a href="/files/images/626a2e8dgd898e3637676.jpg" target="_blank"><img title="安卓SD卡输入输出" alt="安卓SD卡输入输出" src="/files/images/626a2e8dgd898e3637676.jpg" width="586" height="65" name="image_operate_65431364051208710" /></a></div>

    // 写文件
    try {
        File myFile = new File("/sdcard/mysdfile.txt");
        myFile.createNewFile(); // 创建文件
        FileOutputStream fOut = new FileOutputStream(myFile);
        OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
        myOutWriter.append(i); // 填内容
        myOutWriter.close();
        fOut.close();
        Toast.makeText(SongsActivity.this, "写入文件成功", Toast.LENGTH_LONG)
            .show();
    } catch (Exception e) {
        Toast.makeText(SongsActivity.this, "写入文件失败" + e, Toast.LENGTH_SHORT)
            .show();
    }
    // 读文件
    File file = new File("/sdcard/mysdfile.txt");
    try {
        FileInputStream inputStream = new FileInputStream(file);
        byte[] b = new byte[inputStream.available()];
        inputStream.read(b);
        String cc = new String(b);
        Toast.makeText(SongsActivity.this, "读取文件成功", Toast.LENGTH_LONG)
            .show();
        getListView().setDividerHeight(Integer.parseInt(cc));
    } catch (Exception e) {
        Toast.makeText(SongsActivity.this, "读取失败" + e, Toast.LENGTH_SHORT)
            .show();
    }
