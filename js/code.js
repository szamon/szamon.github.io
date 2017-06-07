//Menu display on click

$(document).ready(function(){
	$(".menu").click(function(){
		if($(".menu").hasClass("menuOpen")){
			$(".menu").removeClass("menuOpen");
		}else
			$(".menu").addClass("menuOpen");
			});
	});

$(document).ready(function(){
	$('a').click(
		function(evt){
			evt.preventDefault();
			$("html, body").animate({"scrollTop": $($.attr(this, "href")).offset().top}, 500);
		});
});
