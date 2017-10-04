---
title: email
date: 2017-10-04 15:44:00 Z
Field name: 
---

{% capture content %}
    <article>
        <h1>{{ title }}</h1>
        {{ body }}
    </article>
{% endcapture %}

{% include 'email' %}