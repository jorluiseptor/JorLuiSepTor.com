$(document).ready(function () {

	//turns on the background image
	
		//get random image
		var images = ['background1.jpg'];
		var selectedimg = images[Math.floor(Math.random() * images.length)];
		$.backstretch("img/" + selectedimg);

	//loaded page
	var loadedpage;
	$('.nav a').click(function() {
		
		
		//select the page to load
		var page = $(this).data("page");
		
		//if the same nav link was pressed again, then hide the content
		if (page==loadedpage) {
			
			//$(".content").html('');
			$(".content").slideUp('slow');
			loadedpage= '';
		}
		else{
			//load new content		
			$( ".content" ).load(page).slideDown('slow');	
			//keep track of loaded page
			loadedpage = page;
		}

	});

});	