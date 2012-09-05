jQuery(document).ready(function($) {

// for lazy loading gallery images when they are scrolled to in the viewport
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
  
  
// This creates the hover info on gallery items, and is about a bagillion times better than the TB popover I was trying to shoehorn.
  $('.thumbnails li').each(function(index) {
    var $info = $(this).find('span.info');
    var tipheight = $(this).height();
    $info.css('top', tipheight);

    $(this).hover(function() {
      $info.stop(1);
      $info.animate({top: tipheight - $info.height()}, 300);
    }, function() {
      $info.stop(1);
      $info.animate({top: tipheight }, 100, 'linear');
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

// This is a toggle for the minimalistic theme. 
$('.switchy').toggle(function() {
  $('html, body').addClass('alt');
}, function() {
  $('html, body').removeClass('alt');
});
  

// This updates the custom scrollbar whenever the accordian is expanded or collapsed
$('#jobs li').on('hidden', function() {
  $('.work').mCustomScrollbar("update");
});
$('#jobs li').on('shown', function() {
  $('.work').mCustomScrollbar("update");
});


//===Drawers======================

$('#skill').live('click', function(event) {
  if ($('.rightwing').hasClass('open') ) {
    $('.rightwing').hide("slide", {direction:"right"}, 100).removeClass('open');
  } else {
      $('.rightwing').show("slide", {direction:"right"}, 300).addClass('open');
      $('.skills').mCustomScrollbar("update"); 
  };
});

$('.res').live('click', function(event) {
  if ($('.leftwing').hasClass('open') ) {
    $('.leftwing').hide("slide", {direction:"left"}, 100).removeClass('open');
  } else {
      $('.leftwing').show("slide", {direction:"left"}, 100).addClass('open');
      $('.work').mCustomScrollbar("update");
  };
});



 $('.skills, .work').mCustomScrollbar({
  // autoDraggerLength: "true"
 });



});