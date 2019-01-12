// //Google Map
// window.initMap = initMap;
// function loadScriptMap() {
//   var script = document.createElement('script');
//   script.async = true;
//   script.defer = true;
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBdq6sXGu_a7aoU24Iy9dUrsDd5-5n-soU&callback=initMap';
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
//   document.body.appendChild(script);
//   console.log('map');
// }

// function initMap() {
//   var uluru = {lat: -25.344, lng: 131.036};
//   var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

// $.when($.ajax({
//   type: "POST",
//   url: 'http://116.203.49.164:8069/get_event',
//   dataType: "json",
//   success: function success(data) {
//     objects = data;
//     console.log('good: ',objects);
//   },
//   error: function error(_error) {
//     console.log('error: ',_error);
//   }
// })).done(function () {

// });