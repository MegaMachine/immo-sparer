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
var searchResult;
var checkState;
// var simpleBarUl = new SimpleBar(document.getElementById('search-list'));

//Значення для select
var filterValues = {
  states:[],
  cities:[],
  eventsType:[]
};

var selectState;
var selectCity;
var selectType;

$(document).ready(function(){
  startPosition = {
    lat : $('#latitude').val() || 50.9913249,
    log : $('#longitude').val() || 9.4721966,
    type : $('#template_type').val() || 'terrain'
  };

  //Get selects
  selectState = $('.seminare__search__filter__state select');
  selectCity = $('.seminare__search__filter__city select');
  selectType = $('.seminare__search__filter__type select');

  selectState.select2({
    placeholder: "Select a state",
    allowClear: true
  });
  selectCity.select2({
    placeholder: "Select a city",
    allowClear: true
  });
  selectType.select2({
    placeholder: "Select a event type",
    allowClear: true
  });
  
  //Filter
  $('.select2-selection__clear').click(function(){
    filterSort(selectState.val(),selectCity.val(),selectType.val());
  });

  $('.seminare__search__filter select').change(function(){   
    filterSort(selectState.val(),selectCity.val(),selectType.val());
  });
  
  $('.seminare__search__filter__state select').change(function(){
    if($(this).val()){
      filterValues.cities = [];
      filterValues.cities = _.filter(objects.cities_dict,{ state_id: Number($(this).val())});
      selectCity.html('<option></option>');
      filterValues.cities.map(function(item){
        var option = new Option(item.name,item.id);
        selectCity.append(option);
      });
    } else {
      filterValues.cities = [];
      filterValues.cities = objects.cities_dict;
      selectCity.html('<option></option>');
      filterValues.cities.map(function(item){
        var option = new Option(item.name,item.id);
        selectCity.append(option);
      });
    }
    filterSort(selectState.val(),selectCity.val(),selectType.val());
  });

  $.when($.ajax({
    type: "GET",
    url:  url,
    dataType: "json",
    async: false, // Забрати коли будеш на бек-енд стукатись
    success: function success(data) {
      objects = data;
      searchResult = data.events_dict;
      console.log('good: ',objects);
    },
    error: function error(_error) {
      console.log('error: ',_error);
    }
  })).done(function () {
    loadScriptMap(); //Розкоментувати коли мапа включена
    filterValues.states = objects.state_dict;
    filterValues.cities = objects.cities_dict;
    filterValues.eventsType = objects.event_categories;
    
    filterValues.states.map(function(item){
      var option = new Option(item.name,item.id);
      selectState.append(option);
    });
    filterValues.cities.map(function(item){
      var option = new Option(item.name,item.id);
      selectCity.append(option);
    });
    filterValues.eventsType.map(function(item){
      var option = new Option(item.name,item.id);
      selectType.append(option);
    });
    buildSearchList();
  });
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

function filterSort(state,city,event_type){
  deleteMarkers(); //Розкоментувати коли мапа включена
  var obj = {
    state_id: state ? [Number(state)] : null,
    city_id: city ? [Number(city)] : null,
    event_type_id: event_type ? [Number(event_type)] : null ,
  };
  
  var findObj = _.pickBy(obj, _.identity);
  searchResult = _.filter(objects.events_dict, findObj);
  buildSearchList();
  createMarkersGroup(searchResult); //Розкоментувати коли мапа включена
  showMarkers(); //Розкоментувати коли мапа включена
}

function buildSearchList(){
  var ul = $('.seminare__search__list ul');
  var li;
  ul.html('');
  searchResult.map(function(item){
    li = document.createElement('li');
    $(li).html('<h3>'+item.name+'</h3><div><p>' + item.street + ' ' + item.zip + ' ' + item.city_id[1] + '</p><a class="button blue" href="event/' + item.id + '"><span>Platz reservieren</span></a></div><span>Am ' + String(item.date_begin).substr(0, 9) + ' von ' + String(item.date_begin).substr(11,item.date_begin.length-3) + ' bis ' + String(item.date_end).substr(11,item.date_begin.length-3) + ' Uhr</span>');
    $(li).appendTo(ul);
  });
  
  // simpleBarUl.getContentElement();
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

function createMarkersGroup(items){
  items.map(function(item){
    addMarker({
      lat: item.latitude, 
      lng: item.longitude
    });
  }); 
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



