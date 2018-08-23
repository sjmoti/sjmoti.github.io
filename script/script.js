$(function() {

	$("#navbar").append("<li id='magic-line'></li>");

	activeTabIndicator();
	

});

window.onresize = function(){ 

	var resizeTimer;
	clearTimeout(resizeTimer);
  	resizeTimer = setTimeout(function() {

    
	//console.log("in resize");
	activeTabIndicator();
            
  	}, 250);
}



function activeTabIndicator() {
	var windowWidth = $(window).width();
	if(windowWidth > 770){

		//console.log($(window).width() + " ---");
		var $el, leftPos;
		
		var magicLine = $("#magic-line");
		var isHomePage = $(".home");

		magicLine.css("border-color","transparent transparent #FBE331 transparent");

		var currentElement = null;
		var leftPos = null;
		var offset = null;
		var verticalOffset = null;
		var magicLineLeft = null;

		currentElement = $(".current_page_item a");

		console.log("Page name ---> " + currentElement.text());
		var pageName = currentElement.text();

		if(pageName === "HOME (current)") {
			var group = $(".group");
			isHomePage.css("display", "none");
			leftPos = $(window).width();
			verticalOffset = group.height() + 20;

			magicLine
			.css({"left" : leftPos, "top" : verticalOffset})
			.data("origLeft", magicLine.position().left);
		}
		else {

			
			leftPos = currentElement.position().left;
			offset = currentElement.width()/2 + 10;
			verticalOffset = currentElement.position().top + currentElement.height() + 15;

			magicLineLeft = leftPos + offset;

			magicLine
			.css({"left" : magicLineLeft, "top" : verticalOffset})
			.data("origLeft", magicLine.position().left);
		}
		
		

		$("li a").hover(function() {
	        $el = $(this);

	        leftPos = $el.position().left + ($(this).width() / 2) + 10;
	        magicLine.css("left", leftPos);

			}, function() {
		    	/*magicLine.stop().animate({
		        left: magicLine.data("origLeft")*/
		    	magicLine.css({"left" : magicLine.data("origLeft") });
		    }
		);   
		  
		/* Kick IE into gear */
		$(".active a").mouseenter();
	}
	else {
		//console.log($(window).width() + " ---");
		//console.log("in else");
		var magicLine = $("#magic-line");
		magicLine.css("border-color","transparent");
	}

	
}

function isHomePage(name) {
		
	}
