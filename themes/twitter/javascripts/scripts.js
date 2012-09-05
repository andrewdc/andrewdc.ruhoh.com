jQuery(document).ready(function($) {

  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
  
  //====Thumbnail JS =================================
  // $('.thumbnails li:odd').popover({title: "No Title", content: "no data-content", placement: "left", delay:{show: 150, hide: 0}});
  // $('.thumbnails li:even').popover({title: "No Title", content: "no data-content", placement: "right", delay:{show: 150, hide: 0}});
  
  // This creates the hover info on gallery items, and is about a bagillion times better than the TB popover I was trying to shoehorn.
  $('.thumbnails li').each(function(index) {
    var $info = $(this).find('span.info');
    var tipheight = $(this).height();
    $info.css('top', tipheight);

    $(this).hover(function() {
      $info.stop(1);
      $info.animate({top: tipheight - $info.height()});
    }, function() {
      $info.stop(1);
      $info.animate({top: tipheight });
    });
  });



  $('.modaltrigger').click(function(event) {
    $(this).parents('li').popover('hide');
    var imgurl = $(this).attr('href');
    var thetitle = $(this).attr('name');
    $("#myModal .modal-body").html('<img src='+ imgurl +' />');
    $("#myModalLabel").text(thetitle);
  });

  $('.oldsite').click(function(event) {
    var imgurl = $(this).attr('href');
    var thetitle = $(this).attr('name');
    $("#myModal .modal-body").html('<img src='+ imgurl +' />');
    $("#myModalLabel").text(thetitle);
  });

$('.switchy').toggle(function() {
  $('html, body').addClass('alt');
}, function() {
  $('html, body').removeClass('alt');
});
  

$('#jobs li').click(function(event) {
  $('.work').mCustomScrollbar("update");
});


//===Drawers======================
$('#skill').toggle(function() {
  $('.rightwing').show("slide", {direction:"right"}, 300);
    $('.skills').mCustomScrollbar("update");
  
}, function() {
  $('.rightwing').hide("slide", {direction:"right"}, 100);
  
});

$('.res').toggle(function() {
  $('.leftwing').show("slide", {direction:"left"}, 300);
  $('.work').mCustomScrollbar("update");

}, function() {
  $('.leftwing').hide("slide", {direction:"left"}, 100);
});

 
$('.res').live('click', function(event) {
  if ($('.leftwing').hasClass('open') ) {
    $('.leftwing').hide("slide", {direction:"left"}, 100).removeClass('open');
  } else {
      $('.leftwing').show("slide", {direction:"left"}, 100).addClass('open');
  };

  
});

 $('.skills, .work').mCustomScrollbar({
  autoDraggerLength: "false"
 });



});