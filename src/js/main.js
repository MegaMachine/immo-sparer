$(function(){
  headerHeight();
  titleAlign()
  $(window).scroll(function(){
    
  });

  $(window).resize(function(){
    headerHeight();
  });

});

//webinar height
function headerHeight(){
  setTimeout(function(){
    var height = $('header.header').outerHeight();
    console.log(height);
    $('section.webinar-info').css('min-height','calc(100vh - '+ height +'px)');
  },111);
}

//webinar title align
function titleAlign(){
  setTimeout(function(){
    var items = $('.webinar-info h2');
    var max;
    var min;
    var height;
    if($(items[0]).outerHeight() <= $(items[1]).outerHeight()){
      min = $(items[0]).outerHeight();
      max = $(items[1]).outerHeight();
      height = max - min;
      $(items[0]).css('marginBottom',parseFloat($(items[0]).css('marginBottom'))+ height + 'px');
    } else {
      min = $(items[1]).outerHeight();
      max = $(items[0]).outerHeight();
      height = max - min;
      $(items[1]).css('marginBottom',parseFloat($(items[1]).css('marginBottom')) + height + 'px');
    }
  },111);
}