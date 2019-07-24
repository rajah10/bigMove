$(function(){
  var topoffset = 44; // height of the navigation
  var wheight = $(window).height(); //get height of the window
  var halfheight = (wheight/3) * 2;
  //$(".halfheight").css('height', halfheight);

  $(window).resize(function(){
    var wheight = $(window).height(); //get height of the window
    var halfheight = (wheight/3) * 2;
    //$('.halfheight').css('height', halfheight);
  }); // on resize

  //SET UP ScrollMagic

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  }); // controller

  // let pin = new ScrollScene({
  //   triggerElement: '#nav'
  // }).setPin('#nav').addTo(controller);

 



}); // on load