
/* Parts of this document fall under the following copyright and License: 

Copyright (c) 2012-2018 Jonathan Soma

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
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

		$('#all-stories-btn-text').text('LESS STORIES');
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

		$('#all-stories-btn-text').text('ALL STORIES');
		clickCounter = 1;
	}
	activeTabIndicator();
}
	
