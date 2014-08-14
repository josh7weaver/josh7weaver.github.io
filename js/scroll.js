var controller;
controller = new ScrollMagic();//{loglevel: 3});

$(document).ready(function($) {

    // Call global function
    create_scroll_scene();

}); // end .ready()



// GLOBAL FUNCTION
create_scroll_scene = function (event)
{
    // Set variables
    var sceneLength = $(window).height()/1.25;
    var sceneLengthLonger = $(window).height();

    /*
      DO PINS
    */
    // build array for Experience box IDs (the triggers)
    var IDs = [];

    for ( var i = 0; i <= 11; i++)
    { 
        IDs[i] = "#box" + i;
        
        // clear the style="" on all divs
        $(IDs[i]).attr("style", "");
        console.log("current div to clear: " + IDs[i]);
    }
    
    if(event && $(event.target).data("class"))
    {
        // SETUP the IDs[] array
        IDs = [];   //reset the IDs array to blank
        var element_class_to_show = $(event.target).data("class");  //get the CLASS to show
        
        $(element_class_to_show).each(function()    //loop through each element w/ given class
        {
            if(this.id) //if element has ID, add it to IDs[] array
            {
                IDs.push("#"+this.id);
                //console.log("#"+this.id);
            }
        });
        
        // RESET the controller
        controller.destroy(true);
        controller = null;
        console.log("controller = " + controller);
        //return;
        controller = new ScrollMagic();         // make new one
        console.log(controller);
    }

    console.log("This is the new IDs Array: " + IDs);

    // Build scenes for EACH experience box
    $.each( IDs, function( key, ID ) {

        if(ID == "#box0"){
            new ScrollScene({
                triggerElement: ID,
                duration: sceneLength,
                offset: ( $(ID).height()/2 )- 80
            })
            .setPin(ID)
            .addTo( controller );
            //.addIndicators();
        }
        else
        {
            new ScrollScene({
                triggerElement: ID,
                duration: sceneLength,
                offset: ( $(ID).height()/2 ) + 25
            })
            .setPin(ID)
            .addTo( controller );
            //.addIndicators();
        }

        

        console.log("current id is: " + ID);
    });
}