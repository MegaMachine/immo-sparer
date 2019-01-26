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
  $(window).resize(function(){
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
  });

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
  $('.seminare__search__filter__city select').change(function(){
    if( !selectState.val() && selectCity.val()){
      selectState.prop('disabled', true);
    } else {
      selectState.prop('disabled', false);
    }
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
  $(document).on('click','.marker-info',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    } else {
      $('.marker-info').removeClass('active');
      $(this).addClass('active');
    }
    
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
    var street = item.street ? item.street : '';
    var zip = item.zip ? item.zip : '';
    var city = item.city_id[1] ? item.city_id[1] : '';
    var date = String(item.date_begin).substr(0, 9).replace('-','.').replace('-','.');
    date = date.split('.');
    date = date.reverse();
    date = date.join('.');
    var timeStart = String(item.date_begin).replace(':','.').replace(':','.').substr(11,15);
    var timeEnd = String(item.date_end).replace(':','.').replace(':','.').substr(11,15);
    timeStart = timeStart.substr(0,5);
    timeEnd = timeEnd.substr(0,5);
    $(li).html('<h3>'+item.name+'</h3><div><p>' + street + ' ' + zip + ' ' + city + '</p><a class="button blue" href="event/' + item.id + '"><span>Platz reservieren</span></a></div><span>Am ' + date + ' von ' + timeStart + ' bis ' + timeEnd + ' Uhr</span>');
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
  createMarkersGroup(searchResult);
  // map.addListener('click', function(event) {
  //   addMarker(event.latLng);
  // });
  // addMarker(haightAshbury);
}

function addMarker(location,contentString) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  marker.setVisible(false);
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  infowindow.open(map, marker);
  markers.push(marker);
}

function createMarkersGroup(items){
  items.map(function(item){
    console.log(item);
    var street = item.street ? item.street + ' ,' : '';
    var city = item.city_id[1] ? item.city_id[1] + ' ,' : '';
    var country =  item.country_id[1] ? item.country_id[1] : '';
    var zip = item.zip ? item.zip : '';
    var contentString = '<div class="marker-info"><div class="marker-info-title"><span></span><h2>'+item.city_id[1]+'</h2></div><div class="marker-info-content"><a href="tel:123" class="phone">123123123123</a><p class="address"><span>'+ street +'</span><span>'+ zip +' '+ city +'</span> <span>'+ country +'</span></p></div> </div>';
    addMarker({
      lat: item.latitude, 
      lng: item.longitude
    },contentString);
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


//Custom Marker HTML

// function CustomMarker(latlng, map, args) {
// 	this.latlng = latlng;	
// 	this.args = args;	
// 	this.setMap(map);	
// }

// CustomMarker.prototype = new google.maps.OverlayView();

// CustomMarker.prototype.draw = function() {
	
// 	var self = this;
	
// 	var div = this.div;
	
// 	if (!div) {
	
// 		div = this.div = document.createElement('div');
		
// 		div.className = 'marker';
		
// 		div.style.position = 'absolute';
// 		div.style.cursor = 'pointer';
// 		div.style.width = '20px';
// 		div.style.height = '20px';
// 		div.style.background = 'blue';
		
// 		if (typeof(self.args.marker_id) !== 'undefined') {
// 			div.dataset.marker_id = self.args.marker_id;
// 		}
		
// 		google.maps.event.addDomListener(div, "click", function(event) {			
// 			google.maps.event.trigger(self, "click");
// 		});
		
// 		var panes = this.getPanes();
// 		panes.overlayImage.appendChild(div);
// 	}
	
// 	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
// 	if (point) {
// 		div.style.left = point.x + 'px';
// 		div.style.top = point.y + 'px';
// 	}
// };

// CustomMarker.prototype.remove = function() {
// 	if (this.div) {
// 		this.div.parentNode.removeChild(this.div);
// 		this.div = null;
// 	}	
// };

// CustomMarker.prototype.getPosition = function() {
// 	return this.latlng;	
// };



