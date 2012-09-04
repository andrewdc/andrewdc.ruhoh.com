jQuery(document).ready(function($) {

  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
  
  $('.thumbnails li:odd').popover({title: "No Title", content: "no data-content", placement: "left", delay:{show: 150, hide: 0}});
  $('.thumbnails li:even').popover({title: "No Title", content: "no data-content", placement: "right", delay:{show: 150, hide: 0}});

  $('.modaltrigger').click(function(event) {
    $(this).parents('li').popover('hide');
    var imgurl = $(this).attr('href');
    var thetitle = $(this).attr('name');
    console.log(imgurl);
    $("#myModal .modal-body").html('<img src='+ imgurl +' />');
    $("#myModalLabel").text(thetitle);
  });

  $('.oldsite').click(function(event) {
    var imgurl = $(this).attr('href');
    var thetitle = $(this).attr('name');
    console.log(imgurl);
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
  $('.rightwing').show("slide", {direction:"right"}, 100);
    $('.skills').mCustomScrollbar("update");
  
}, function() {
  $('.rightwing').hide("slide", {direction:"right"}, 100);
  
});

$('.res').toggle(function() {
  $('.leftwing').show("slide", {direction:"left"}, 100);
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