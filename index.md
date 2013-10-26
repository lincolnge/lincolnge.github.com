---
layout: page
title:
tagline:
---
{% include JB/setup %}

<div>

  {% for post in site.posts limit: 4  %}
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <div class="list"><time>{{ post.date | date_to_string }}</time></div>
    <p>{{ post.content }}</p>
    <a href="{{ post.url }}">More...</a>
    <hr />
  {% endfor %}

  <ul>
    {% for post in site.posts limit: 5 offset: 4 %}
    <li class="list">
      <time>{{ post.date | date_to_string }}</time> <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>

	<a href="/archive.html">Continue...</a>

</div>

