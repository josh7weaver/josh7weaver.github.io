$(document).ready(function($) {

	/*
		DOCUMENT WIDTH LISTNER
	*/
	$(window).resize(function(event) {
      // Show warning message if viewport is too small
      if($(window).width() < 1000){
        $('#message').removeClass('hide')
      }else{
        $('#message').addClass('hide')
      }
      console.log("window resized to: " + $(window).width());
    }).resize(); //last .resize is to trigger the event on page load once


	/*
		CLICK LISTENERS FOR FILTER
	*/

	// CLICKING the LINKS
	$('#filterList').click(function(event){

		// fix active state
		$('#filterList li').removeClass('active');
		$(event.target).addClass('active');

		// ReInitialize Scenes
		create_scroll_scene(event);


		// HIDE / SHOW the experiences
		var element_class_to_show = $(event.target).data("class");

		if(element_class_to_show) //if they didn't click SHOW ALL
		{ 
			$('.experience, .year, .title').hide();
			$(element_class_to_show).show();
		}
		else	// clicked SHOW ALL, so show everything
		{ 
			$('.experience, .year, .title').show();
			var url = window.location.href;
			if(window.location.hash)
				url = url.split('#')[0];
			window.location.href = url + "#showFilter";
		}

	});

	// HEADER
	$('#filterHeader').click(function(event) {
		
		//unset the hover class
		$(this).removeClass("hover");

		// SHOW/HIDE the filters
		if($('#filterList').is(':visible'))	// its visible, so HIDE it
		{
			$('#filterList').fadeOut("fast");
			$('#filterHelperMessage').fadeOut("fast");
		}
		else	// it's hidden, SHOW IT
		{
			$('#filterList').fadeIn("slow");
			$('#filterHelperMessage').fadeIn("slow");
		}

		// Toggle up/down arrow
		$('#filterHeader span')
			.toggleClass('glyphicon-circle-arrow-up')
			.toggleClass('glyphicon-circle-arrow-down');
		
		// Animate in/out the content
		//console.log("hitting animate. Height is: " + $('#info').height())
		$('#info').animate({
			height: "toggle",
			opacity: "toggle",
			margin: "toggle"
		}, 800);
	});

	// HOVER over LINKS
	$("#filterList li, #filterHeader").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).addClass("hover");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass("hover");
	});


	// GET paramater showFilter
	if (window.location.hash){
      var hash = window.location.hash.substring(1);
      if (hash == "showFilter"){
         $('#filterHeader').click();
      }
   }
});