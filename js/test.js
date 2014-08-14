var controller;
$(document).ready(function () {
		
	controller = new ScrollMagic();//{loglevel: 3});
	

	var scene1 = new ScrollScene({
		triggerElement: "#thingToPin",
		offset: ($(window).height() / 4),
		duration: 800

	})
        .setPin("#thingToPin")
        .addTo(controller)
        .addIndicators();

    var scene2 = new ScrollScene({
		triggerElement: "#thingToPin2",
		offset: ($(window).height() / 4),
		duration: 800

	})
        .setPin("#thingToPin2")
        .addTo(controller)
        .addIndicators();

});