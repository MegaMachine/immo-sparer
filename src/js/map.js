// //Google Map
//<input id="latitude" type="hidden" t-att-value="country.latitude"/>
//<input id="longitude" type="hidden" t-att-value="country.longitude"/>
//<input id="template_type" type="hidden" t-att-value="template_type"/> 

window.initMap = initMap;
var url = 'http://localhost:3000/json/data.json';
var map;
var markers = [];
var startPosition;
var objects;

$(document).ready(function(){
  startPosition = {
    lat : $('#latitude').val() || 50.9913249,
    log : $('#longitude').val() || 9.4721966,
    type : $('#template_type').val() || 'terrain'
  };

  //Create Selects
  var selectState = $('.seminare__search__filter__state select');
  var selectCity = $('.seminare__search__filter__city select');
  var selectType = $('.seminare__search__filter__type select');
  selectState.select2();
  selectCity.select2();
  selectType.select2();
  objects.state_dict.map(function(item){
    var option = new Option(item.name,item.id)
    selectState.append(option);
  });
  objects.cities_dict.map(function(item){
    var option = new Option(item.name,item.id)
    selectCity.append(option);
  });
  objects.event_categories.map(function(item){
    var option = new Option(item.name,item.id)
    selectType.append(option);
  });

  //Filter
  // var obj = {
  //   id_season: this.filterResult.inputs.season ? Number(this.filterResult.inputs.season) : null,
  //   id_contingent : this.filterResult.inputs.contingent ? Number(this.filterResult.inputs.contingent) : null,
  //   material : this.filterResult.selects.material ? { id_material : Number(this.filterResult.selects.material.value) } : null ,
  // };
  // var findObj = _.pickBy(obj, _.identity);
  // var searchResult = _.filter(objects., findObj);
  // console.log(_.find(objects.event_dist,[1059]));
});

function loadScriptMap() {
  var script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfcs6mV0XqyFqpo34GSATKLtePqTgc0WI&callback=initMap';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  document.body.appendChild(script);
}

function initMap() {
  var haightAshbury = {lat: startPosition.lat, lng: startPosition.log};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: haightAshbury,
    mapTypeId: startPosition.type
  });

  map.addListener('click', function(event) {
    addMarker(event.latLng);
  });
  // addMarker(haightAshbury);
}

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function showMarkers() {
  setMapOnAll(map);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}

// function initMap() {
//   var uluru = {lat: -25.344, lng: 131.036};
//   var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

$.when($.ajax({
  type: "GET",
  url:  url,
  dataType: "json",
  async: false, // Забрати коли будеш на бек-енд стукатись
  success: function success(data) {
    objects = data;
    console.log('good: ',objects);
  },
  error: function error(_error) {
    console.log('error: ',_error);
  }
})).done(function () {
  // console.log(objects);
});


