---
layout: post
title: 谷歌地图
categories:
- programming
tags:
- API
---
{% include JB/setup %}

<iframe src="/files/code/map.html" width="100%" height="100%" frameborder="0" scrolling="no"> </iframe>

    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <style type="text/css">
          html { height: 100% }
          body { height: 100%; margin: 0; padding: 0 }
          #map-canvas { height: 100% }
        </style>
        <script type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALTGPdgSxKf3oaKknvE11B01p5qFp4T9Y&sensor=true">
        </script>
        <script type="text/javascript">
          function initialize() {
            var mapOptions = {
              center: new google.maps.LatLng(-34.397, 150.644),
              zoom: 8,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"),
                mapOptions);
          }
          google.maps.event.addDomListener(window, 'load', initialize);
        </script>
      </head>
      <body>
        <div id="map-canvas"/>
      </body>
    </html>

## References:
+ Goodgle Map, <a href="https://developers.google.com/maps/documentation/javascript/tutorial#api_key">
URL</a>
