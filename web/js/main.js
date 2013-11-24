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
			$(".content").fadeIn('slow');
			loadedpage= '';
		}
		else{
			//load new content		
			$( ".content" ).load(page).fadeOut('slow');	
			//keep track of loaded page
			loadedpage = page;
		}
	});
	
	
	//activate fancybox
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		    helpers : {
				title: {
					type: 'outside'
				}
			}
	});
	

});	