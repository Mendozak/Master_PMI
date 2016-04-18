$(document).ready(function(){
	$("#facebook").hover(function(){
		$(this).attr("src","content/facebook_hover.png");
	},function(){
	    $(this).attr("src","content/facebook.png");
	});
	
	$("#twitter").hover(function(){
		$(this).attr("src","content/twitter_hover.png");
	},function(){
	    $(this).attr("src","content/twitter.png");
	});
	
	$("#google").hover(function(){
		$(this).attr("src","content/googleplus_hover.png");
	},function(){
	    $(this).attr("src","content/googleplus.png");
	});
	
	$("#youtube").hover(function(){
		$(this).attr("src","content/youtube_hover.png");
	},function(){
	    $(this).attr("src","content/youtube.png");
	});
	
	$("#linkedin").hover(function(){
		$(this).attr("src","content/linkedin_hover.png");
	},function(){
	    $(this).attr("src","content/linkedin.png");
	});
	
	$("#bulb,#bulb_label").hover(function(){
		$(this).attr("src","content/bulb_light.png");
	},function(){
	    $(this).attr("src","content/bulb_off.png");
	});
	
	$("#information_row").hover(function(){
		$("#information").attr("src","content/folder_hover.png");
	},function(){
	    $("#information").attr("src","content/folder.png");
	});
	
	$("#credential_row").hover(function(){
		$("#credential").attr("src","content/credentials_hover.png");
	},function(){
	    $("#credential").attr("src","content/credentials.png");
	});
	
	$("#cloud_row").hover(function(){
		$("#cloud").attr("src","content/cloud_hover.png");
	},function(){
	    $("#cloud").attr("src","content/cloud.png");
	});
	
	$("#search_row").hover(function(){
		$("#search").attr("src","content/search_hover.png");
	},function(){
	    $("#search").attr("src","content/search.png");
	});
});