$(document).ready(function () {


	//loaded page
	var loadedpage;
	$('.nav a').click(function() {
		
		
		//select the page to load
		var page = $(this).data("page");
		
		//if the same nav link was pressed again, then hide the content
		if (page==loadedpage) {
			
			//$(".content-placeholder").html('');
			$(".content-placeholder").fadeOut('slow');
			loadedpage= '';
		}
		else{
			//load new content		
			$(".content-placeholder").load(page);
			$(".content-placeholder").fadeIn('slow');	
			//keep track of loaded page
			loadedpage = page;
		}
	});
	

});	