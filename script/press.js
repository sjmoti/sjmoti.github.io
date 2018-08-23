var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10pA9E2w4xC-5QdPNdaGTyNu-pL13PU8_IdVS1h9OWEI/edit?usp=sharing'

var tabletop = 	Tabletop.init( { key: publicSpreadsheetUrl,
  	callback: showInfoInitial,
	orderby: 'date',
	reverse: true,
	wait: true} )
	setTimeout(function() {
		tabletop.fetch()
	}, 0)




$(document).ready(function() {
	var mb = document.getElementById("all-stories-btn");
	mb.addEventListener("click", showInfoAll);
})

function showInfoInitial(data) {
	$.each(tabletop.sheets("Press").all().slice(0, 10), function(i, press_Item) {
		var press_i = $('<span><p class = "primary-text">' + press_Item.Date +
			'<span class = "outlet-text"> ' + press_Item.Outlet + ': </span>'+ 
			'<a href="'+ press_Item.Link  +'">' +
			press_Item.Story + '</a>' + 
			' </span>')
		press_i.appendTo("#press-items");
        })
	activeTabIndicator();
}

var clickCounter = 1;

function showInfoAll(data) {
	$("#press-items").empty();
	if(clickCounter == 1){
		//show initial
			$.each(tabletop.sheets("Press").all(), function(i, press_Item) {
			var press_i = $('<span><p class = "primary-text">' + press_Item.Date +
				'<span class = "outlet-text"> ' + press_Item.Outlet + ': </span>'+ 
				'<a href="'+ press_Item.Link  +'">' +
				press_Item.Story + '</a>' + 
				' </span>')
			press_i.appendTo("#press-items");
		})
		document.getElementById("all-stories-btn").classList.add('upArrow-btn-style');
		document.getElementById("all-stories-btn").classList.remove('downArrow-btn-style');

		document.getElementById("all-stories-arrow-btn").classList.add('purpleArrowUp');
		document.getElementById("all-stories-arrow-btn").classList.remove('purpleArrowDown');
		clickCounter = 2;
	} else{
			
		//show initial
		$.each(tabletop.sheets("Press").all().slice(0, 10), function(i, press_Item) {
		var press_i = $('<span><p class = "primary-text">' + press_Item.Date +
			'<span class = "outlet-text"> ' + press_Item.Outlet + ': </span>'+ 
			'<a href="'+ press_Item.Link  +'">' +
			press_Item.Story + '</a>' + 
			' </span>')
		press_i.appendTo("#press-items");
        	})
		document.getElementById("all-stories-btn").classList.remove('upArrow-btn-style');
		document.getElementById("all-stories-btn").classList.add('downArrow-btn-style');
		
		document.getElementById("all-stories-arrow-btn").classList.remove('purpleArrowUp');
		document.getElementById("all-stories-arrow-btn").classList.add('purpleArrowDown');
		clickCounter = 1;
	}
	activeTabIndicator();
}
	
