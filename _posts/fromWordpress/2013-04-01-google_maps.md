---
layout: post
title: 谷歌地图
categories:
- Android platform
tags:
- it
status: publish
type: post
published: true
meta:
  duoshuo_thread_id: '1365771562581491720'
  _edit_last: '1'
  _oembed_7e039f35f0725ce818855b62108d415d: '{{unknown}}'
---
    <code lang="html">
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
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyx3W8gpUx47lMxs7BMstGpHg9gwN4Uzg&sensor=true">
        </script>
        <script type="text/javascript">
          function initialize() {
            var mapOptions = {
              center: new google.maps.LatLng(-34.397, 150.644),
              zoom: 8,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementByIdx_x_x("map-canvas"),
                mapOptions);
          }
          google.maps.event.addDomListener(window, 'load', initialize);
        </script>
      </head>
      <body>
        <div id="map-canvas"></div>
      </body>
    </html></code>

    <div>references:</div>
    <div><a href="https://developers.google.com/maps/documentation/javascript/tutorial#api_key">
    https://developers.google.com/maps/documentation/javascript/tutorial#api_key</a></div>
