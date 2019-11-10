---
layout: post
title: "FE DK Debugging"
date_time: "2016-03-22 11:23:24 +0800"
description: ""
category:
- programming
tags:
---

## Get Request:

Curl:

    $ curl -i http://localhost:8080/api/test2.json\?name\=233
    HTTP/1.1 200 OK
    Server: Apache-Coyote/1.1
    Content-Type: application/json;charset=UTF-8
    Transfer-Encoding: chunked
    Date: Tue, 17 May 2016 16:56:00 GMT

    {"value":"233"}

Pic:

![](/files/images/fe-dk-debugging/Screen Shot 2016-05-18 at 00.53.58.png)
![](/files/images/fe-dk-debugging/Screen Shot 2016-05-18 at 00.58.49.png)

Java Spring Code:

{% highlight Java linenos %}
/**
 * @RestController
 * 获取 json 数据
 * @param name
 * @return model
 */
@RequestMapping("/api/test2.json")
public @ResponseBody ModelMap greeting(@RequestParam(value="name", defaultValue="World") String name) {
    ModelMap model = new ModelMap();
    System.out.println("hello");
    System.out.println("value " + name);
    model.addAttribute("value", name);
    return model;
}
{% endhighlight %}

## Post Request:

### Send Form:

Curl:

    $ curl -d "id=2&content=Maoyan" http://localhost:8080/api/test.form

    id=2&content=Maoyan

Pic:

![](/files/images/fe-dk-debugging/Screen Shot 2016-05-18 at 00.34.54.png)

Java Spring Code:

{% highlight Java linenos %}
/**
 * 定义 Greeting
 */
public class Greeting {
    private long id;
    private String content;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

/**
 * @Controller
 * 发送 form 数据
 * @param greeting
 * @return String
 */
@RequestMapping(value="/api/test.form", method=RequestMethod.POST)
public @ResponseBody String printForm(Greeting greeting) {
    System.out.println("Hello, greeting form");
    System.out.println(greeting.getContent());
    System.out.println(greeting.getId());
    String result = "id=" + greeting.getId() + "&content=" + greeting.getContent();
    System.out.println(result);
    return result;
}
{% endhighlight %}

### Send JSON:

Curl:

    $ curl -H "Content-Type: application/json" -X POST -d '{"id":13313,"content":"dfasdf"}' http://localhost:8080/api/test.json

    {"id":13313,"content":"dfasdf"}

Pic:

![](/files/images/fe-dk-debugging/Screen Shot 2016-05-18 at 00.35.37.png)

Java Spring Code:

{% highlight Java linenos %}
@ResponseBody
@RequestMapping(value="/api/test.json")
public ModelMap printJson(@RequestBody ModelMap model) {
    System.out.println("Hello, model");
    System.out.println(model);
    System.out.println(model.get("id")); // if not id, it will be null
    return model;
}
{% endhighlight %}

## Warninig：

- 有个槽点，我在 Java 老是想用单引号，然后报错了。。。
- ResponseBody 和 RequestBody 是不一样的，同样的坑踩多了就愚蠢了。

## References:

- 阮一峰. curl网站开发指南 <http://www.ruanyifeng.com/blog/2011/09/curl.html>
- StackOverflow. <http://stackoverflow.com/questions/7172784/how-to-post-json-data-with-curl-from-terminal-commandline-to-test-spring-rest>
