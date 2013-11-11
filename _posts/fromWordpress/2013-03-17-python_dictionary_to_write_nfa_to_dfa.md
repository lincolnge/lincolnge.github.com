---
layout: post
title: python用字典写NFA to DFA
categories:
- Python
tags:
- it
---
{% include JB/setup %}

<div><a href="https://github.com/lincolnge/NFA-to-DFA/blob/master/dictDFA.py">https://github.com/lincolnge/NFA-to-DFA/blob/master/dictDFA.py</a></div>

<div>NFA to DFA python</div>
比如说这个字典：

<div>
这是我的输入，输入一个NFA
<pre>
dictNFA = {
    'q1': { 'e': ['q2', 'q11'], '0': [''], '1': [''], 'acep': False, 'start': True },
    'q2': { 'e': ['q3', 'q5'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q3': { 'e': [''], '0': [''], '1': ['q4'], 'acep': False, 'start': False },
    'q4': { 'e': ['q5', 'q3'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q5': { 'e': [''], '0': ['q6'], '1': [''], 'acep': False, 'start': False },
    'q6': { 'e': ['q7', 'q9'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q7': { 'e': [''], '0': [''], '1': ['q8'], 'acep': False, 'start': False },
    'q8': { 'e': ['q9', 'q7'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q9': { 'e': [''], '0': ['q10'], '1': [''], 'acep': False, 'start': False },
    'q10': { 'e': ['q11', 'q2'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q11': { 'e': ['q12', 'q14'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q12': { 'e': [''], '0': [''], '1': ['q13'], 'acep': False, 'start': False },
    'q13': { 'e': ['q14', 'q12'], '0': [''], '1': [''], 'acep': False, 'start': False },
    'q14': { 'e': [''], '0': [''], '1': [''], 'acep': True, 'start': False },
}
</pre>

</div>

<div>dictDFA.keys()输出的是列表：</div>
    ['q14', 'q11', 'q10', 'q13', 'q12', 'q1', 'q3', 'q2', 'q5', 'q4', 'q7', 'q6', 'q9', 'q8']
<div>顺序是固定的这个形式</div>
<br />

<pre>def loopB(xNFA, xe, tmpInI):</pre>
<div>当xe=ε时这个是用循环将q1-&gt;q2(消耗<span>ε：the empty string)q1-&gt;q11</span></div>
<div>然后q2-&gt;q3...</div>
<div>当xe=0时这个循环q5-&gt;q6(消耗0）</div>
<div>当xe=1时这个循环q7-&gt;q8(消耗1）</div>

<div>如果要找q1, 不能用dictDFA.keys()[0]</div>
<div>从这个列表得知dictDFA.keys()[0]变成了'q14'</div>

<div>q1的关键是它的'start'是true</div>
<div>那么只能用循环一个一个找</div>

<div>
    def seachStartOrAccept(startOrAccept): #这个是用来查账它开始start或者结束accept（accept就是两个圈）
        for x in xrange(0, len(dictNFA.keys())):
            if dictNFA.values()[x][startOrAccept]:
                return dictNFA.keys()[x]
    dictNFA.values()[x][startOrAccept]其实是dictNFA.values()[x]['start']
</div>

<br />
<pre>tmpII = list(set(tmpII))用这个函数是为了除掉列表里面的重复项，列表重复是允许的，字典里面重复是不允许的。</pre>
<br />
<pre>dictDFA.update({ str(tmpIII): { '0': tmpIIIa, '1': tmpIIIb, 'start': False, 'acep': False } })</pre>
<div>字典用update（）添加新项目，如果重复，那么新添加的项会替换旧的项</div>
<br />
<div>程序开始：</div>
<div>先得出第一个项tmp0</div>
<div>然后tmp0消耗0得到tmp1</div>
<div>tmp0消耗1得到tmp2</div>
<div>tmp1消耗0得到tmp3</div>
<div>tmp1消耗1得到tmp4</div>
<div>。。。以此类推。。。</div>
<div>可以得到形如：</div>
<div>0 1 2</div>
<div>1 3 4</div>
<div>2 5 6</div>
<div>3 7 8</div>
<div>...</div>
<div>树状图如下：</div>

<div>
<img alt="" src="http://lincolnge.duapp.com/wp-content/uploads/pic/626a2e8dgd818660c407d&amp;690.jpg" width="385" height="509" name="image_operate_22101363499632793" />
</div>

<div>用一个循环让它循环下去，什么时候停止呢？</div>
<div>就是当我被选出来的数，比如说4和之前的1相同，那么4就停止了</div>

    if str(tmpIIIa) not in dictDFA.keys():
        loopNFAtoDFA(tmpIIIa)

<br />

<div>最后得到这个结构的字典：</div>

    dictDFAend = {
        str(qA): { ’0′: 0, ’1′: 1, ‘start’: False, ‘acep’: False },
        str(qB): { ’0′: 0, ’1′: 1, ‘start’: False, ‘acep’: False },
        str(qC): { ’0′: 0, ’1′: 1, ‘start’: False, ‘acep’: False },
        str(qD): { ’0′: 0, ’1′: 1, ‘start’: False, ‘acep’: False },
        str(qE): { ’0′: 0, ’1′: 1, ‘start’: False, ‘acep’: False },
    }

<div>NFA to DFA 原理如此图</div>

<div>
<img alt="" src="http://lincolnge.duapp.com/wp-content/uploads/pic/626a2e8dgd8187db392c5&amp;690.jpg" width="385" height="509" name="image_operate_22101363499632793" />
</div>

<div>接下来最小化这个DFA：</div>

<div>首先将non-accept组成一组，accept组成一组</div>
<div>non-accept消耗0归不同类的各自分开，若为同一类，则在一起。</div>
<div>non-accept一类的消耗1归不同类的各自分开，若为同一类，则在一起。</div>
<div>最后连接每一个类。</div>

<div>NFA转化为DFA，并且Minimum DFA过程如下：</div>

<div>
<img alt="" src="http://lincolnge.duapp.com/wp-content/uploads/pic/626a2e8dgd81895f987bd&amp;690.jpg" width="397" height="800" name="image_operate_62251363500041337" />
</div>

