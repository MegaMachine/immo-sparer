$(function() {

  headerCloneForMobile();
  setTimeout(function() {
    headerHeight();
    titleAlign();
    mapWidth();
    newPropertiesItemHeight();
    objectFitSimulation();
  }, 111);

  $(window).scroll(function() {});

  $(window).resize(function() {
    headerHeight();
    titleAlign();
    mapWidth();
    newPropertiesItemHeight();
    titleAlign();
  });
  $('.menu-button').click(function(){
    $(this).toggleClass('is-active');
    $('.header__bottom__nav__mobile').toggleClass('active');
  });
});

//object-fit-simulation
function objectFitSimulation(){
  var simulator = $('.object-fit-simulation');
  var img = simulator.find('img');
  var imgSrc = img.attr('src');
  img.css('display','none');
  simulator.css({
    'background':'url('+imgSrc+') no-repeat center / cover',
  });
}
//webinar height
function headerHeight() {
  var height = $("header.header").outerHeight();
  $("section.webinar-info").css("min-height", "calc(100vh - " + height + "px)");
}

//webinar title align
function titleAlign() {
  var items = $(".webinar-info h2");
  var defaultMargin = items.css('marginBottom');
  var max;
  var min;
  var height;
  if ($(items[0]).outerHeight() <= $(items[1]).outerHeight()) {
    $(items[0]).css(
      "marginBottom",
      defaultMargin
    );
    min = $(items[0]).outerHeight();
    max = $(items[1]).outerHeight();
    height = max - min;
    $(items[0]).css(
      "marginBottom",
      parseFloat($(items[0]).css("marginBottom")) + height + "px"
    );
  } else {
    $(items[1]).css(
      "marginBottom",
      defaultMargin
    );
    min = $(items[1]).outerHeight();
    max = $(items[0]).outerHeight();
    height = max - min;
    $(items[1]).css(
      "marginBottom",
      parseFloat($(items[1]).css("marginBottom")) + height + "px"
    );
  }
}

//map size
function mapWidth() {
  var windowWidth = $("body").outerWidth();
  var mapOffset = $(".seminare-and-map .map").offset().left;
  var seminarWIdth = $('.seminare-and-map .seminare').outerWidth();
  var containerPadding = parseFloat($('.seminare-and-map .container').css('paddingLeft'));
  var containerHeight = parseFloat($('.seminare-and-map .container').outerHeight());
  $(".seminare-and-map .map .map-wrap").css({
    "width": windowWidth - mapOffset + "px",
    // 'left': seminarWIdth + containerPadding + 'px',
    'height': containerHeight + 'px'
  });
  console.log(mapOffset);
}

// new-properities new-properties__item__text height
function newPropertiesItemHeight(){
  var itemsLineHeight = parseFloat($('.new-properties__item__text p').css('lineHeight'));
  var itemsTextTitle = $('.new-properties__item__text h3');
  var itemsLocationHeight =  $('.new-properties__item__location div');
  var maxHeight1 = 0;
  var maxHeight2 = 0;
  itemsLocationHeight.map(function(){
    if($(this).outerHeight() >= maxHeight1){
      maxHeight1 = $(this).outerHeight();
    }
  });
  itemsTextTitle.map(function(){
    if($(this).height() >= maxHeight2){
      maxHeight2 = $(this).height();
    }
  });
  itemsLocationHeight.css('height', maxHeight1 + 'px');
  itemsTextTitle.css('height', maxHeight2 + 'px');
  $('.new-properties__item__text p').css('height', itemsLineHeight * 2 + 'px');
}

function headerCloneForMobile(){
  var links =  $('.header__bottom__nav ul li a');
  // $('.header__bottom__nav ul a').clone().appendTo('.header__bottom__nav__mobile ul');
  
  // header__top log-or-reg
    //header__top social
    //header__mid__contacts__phones a
  for (var index = 0; index < links.length; index++) {
    var li = document.createElement('li');
    var cloneLink =  $(links[index]).clone();
    $(cloneLink).removeClass('dropdown-item');
    $(cloneLink).appendTo(li);
    $(li).appendTo('.header__bottom__nav__mobile ul');   
  }
  // $('.header__top div.social').clone().appendTo('.header__bottom__nav__mobile');
  $('.header__mid__contacts__phones').clone().appendTo('.header__bottom__nav__mobile');
  $('.header__top .log-or-reg').clone().appendTo('.header__bottom__nav__mobile');
}