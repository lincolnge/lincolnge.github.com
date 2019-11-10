---
layout: post
title: BASIC 语言与机器人
categories:
- programming
tags:
- Robot
- BASIC
---

    实验一：I/O控制
    ' {$STAMP BS2}
    ' {$PBASIC 2.5}
    DO
    LOW   0      :I/O口输出低电平
    LOW    1      :I/O口输出低电平
    PAUSE  1000   :延时1000ms
    HIGH   0      :I/O口输出高电平
    HIGH   1      :I/O口输出高电平
    LOOP
    END
    实验二：电机控制
    ' {$STAMP BS2}
    ' {$PBASIC 2.5}
    DO              :无条件无限循环
    PULSOUT 12,650   :表示在12I/O口输出650*2us的脉冲
    PULSOUT 13,850   :表示在12I/O口输出850*2us的脉冲
    PAUSE  20   :表示延时20ms
    LOOP
    注意：PULSOUT 12,650改为750则电机停转，电机转速控制应在650到850之间越靠近750，转速越低。

    ' {$STAMP BS2}
    ' {$PBASIC 2.5}
    count1 VAR word     ：count1为16位变量0-65535
    count2 VAR byte      ：count2为8位变量0-255
    count3 VAR nib       ：count3为4位变量0-15
    count4 VAR bit       ：count4为1位变量0-1
    FOR count1 =1 TO 100
      PULSOUT 12,735
      PULSOUT 13,755
      PAUSE  20
    Next

    ' {$STAMP BS2}
    ' {$PBASIC 2.5}
    count1 VAR Word
    count2 VAR Byte
    count3 VAR Nib
    count4 VAR Bit
    DO
      GOSUB Backward         ：调用子程序Backward
      GOSUB liftward           ：调用子程序liftward
      GOSUB Forward          ：调用子程序Forward
    LOOP
    Rightward:                 ：通过标号定义子程序
      FOR count1 =1 TO 100
        PULSOUT 12,850
        PULSOUT 13,750
        PAUSE  20
      NEXT
    RETURN                    ：子程序返回
    Liftward:
      FOR count1 =1 TO 100
        PULSOUT 12,750
        PULSOUT 13,850
        PAUSE  20
      NEXT
    RETURN
    Backward:
      FOR count1 =1 TO 100
        PULSOUT 12,850
        PULSOUT 13,650
        PAUSE  20
      NEXT
    RETURN

    Forward:
      FOR count1 =1 TO 100
        PULSOUT 12,650
        PULSOUT 13,850
        PAUSE  20
      NEXT
    RETURN
    实验三：触须机器人
    ' {$STAMP BS2}
    ' {$PBASIC 2.5}
    count1 VAR Byte
    count2 VAR Word
    main:
    FOR count2=0 TO 100
        FREQOUT 0,2,800   :I/O口0输出800Hz方波信号
    NEXT
    DO
    IF(IN8=0 OR IN9=0)THEN   ：I/O口8/9输入检测
    FOR count2=0 TO 100
        FREQOUT 0,2,800
    NEXT
        GOSUB Backward
        GOSUB Liftward
    ELSE
        GOSUB Forward
    ENDIF
    LOOP
    Backward:
      FOR count1 =1 TO 100
        PULSOUT 12,850
        PULSOUT 13,650
        PAUSE  20
      NEXT
    RETURN

    Liftward:
      FOR count1 =1 TO 100
        PULSOUT 12,750
        PULSOUT 13,850
        PAUSE  20
      NEXT
    RETURN
    Forward:
      FOR count1 =1 TO 10
        PULSOUT 12,650
        PULSOUT 13,850
        PAUSE  20
      NEXT
    RETURN


## References:

+ [德普施机器人2](http://wenku.baidu.com/view/555d083b376baf1ffc4fad90.html)
+ [智能机器人平台搭建及BASIC语言在机器人中的简单应用](http://www.worlduc.com/blog2012.aspx?bid=3884991)
+ [宝贝车机器人教材](http://read.pudn.com/downloads166/ebook/761752/宝贝车机器人教材.pdf)