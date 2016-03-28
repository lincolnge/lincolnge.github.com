---
layout: post
title: "FE DK Debugging"
date_time: "2016-03-22 11:23:24 +0800"
description: ""
category:
- programming
tags:
---
{% include JB/setup %}

## Get Request:

Curl:

    $ curl http://localhost:8080/greeting\?name\=Maoyan

Pic:

![](/files/images/image2016-3-21 10-15-20.png)

Response:

`{"id":6,"content":"Hello, Maoyan!"}`

## Post Request:

### Send Form:

Curl:

    $ curl -d "id=2&name=Maoyan" http://localhost:8080/testform2

Pic:

![](/files/images/Screen Shot 2016-03-21 at 10.18.18.png)

### Send JSON:

Curl:

    $ curl -H "Content-Type: application/json" -X POST -d '{"id":13313,"content":"dfasdf"}' http://localhost:8080/api/testJson

Pic:

![](/files/images/74mm3yRC3WYi78pP.jpg)

Java Spring Code:

{% highlight Java linenos %}
@RequestMapping(value="/api/testJson")
public @ResponseBody ModelMap printHello(@RequestBody ModelMap model) {
    System.out.println("Hello, model");
    System.out.println(model);
    return model;
}
{% endhighlight %}

## Warninig：

有个槽点，我在 Java 老是想用单引号，然后报错了。。。

## References:

- 阮一峰. curl网站开发指南 <http://www.ruanyifeng.com/blog/2011/09/curl.html>
- StackOverflow. <http://stackoverflow.com/questions/7172784/how-to-post-json-data-with-curl-from-terminal-commandline-to-test-spring-rest>
