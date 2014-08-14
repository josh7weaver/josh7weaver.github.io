var controller;
$(document).ready(function($) {


  /*****************************************/
  /* INITIALIZE THE SCROLLMAGIC CONTROLLER */
  /*****************************************/
    // init controller
    controller = new ScrollMagic();//{loglevel: 3});

  /***************************************/
  /* THIS FUNCTION BUILDS THE ZOOM EFFECT*/
  /***************************************/

    // build tweens
    var tween_entry = TweenMax.to("#animate1", 0.5, {backgroundColor: "green", scale: 2.5});
    var tween2 = TweenMax.to("#animate2", 0.5, {backgroundColor: "yellow", scale: 2.5});
    var tween_exit = TweenMax.to("#animate1", 0.5, {scale: 1});

    /*
    this will need to be .trigger and .trigger_exit
    */
    // build SCENES
    var scene1 = new ScrollScene({triggerElement: "#trigger1", duration: 800})
        .setPin("#animate1")
        .addTo(controller)
        .addIndicators();
    
    var scene1a = new ScrollScene({triggerElement: "#trigger1"})
        .setTween( tween_entry )
        .addTo(controller)
        .addIndicators();

    new ScrollScene({
        triggerElement: "#trigger1_exit",
        duration:300
    })
      .addTo(controller)
      .setTween( tween_exit )
      .addIndicators(); 


    //MAY NOT NEED THESE
    var scene2 = new ScrollScene({triggerElement: "#trigger2"})
        .setTween(tween2)
        .addTo(controller)
        .addIndicators();
  
    // parallax
    new ScrollScene({
      triggerElement: "section#parallax",
      duration: $(window).height() + 300,
      offset: -150
    })
      .addTo(controller)
      .triggerHook("onCenter")
      .setTween(
        new TimelineMax().add([
          TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.1, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
          TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -260%", ease: Linear.easeNone})
        ])
      )
      .addIndicators();

      
    
    // add listeners
    


  /************************/
  /*    OTHER FUNCTIONS   */
  /************************/
    $(window).resize(function(event) {
      // Show warning message if viewport is too small
      if($(window).width() < 800){
        $('#message').removeClass('hide')
      }else{
        $('#message').addClass('hide')
      }
    }).resize(); //last .resize is to trigger the event on page load once


}); // end .ready()



// build tween from original state to final state
var tween = TweenMax.fromTo("#animate2", 0.5, 
    {"border-top": "0px solid white"},
    {"border-top": "30px solid white", backgroundColor: "blue", scale: 0.7}
  );