//Menu display on click

$(document).ready(function(){
	$(".menu").click(function(){
		if($(".overlay").hasClass("overlayOpen")){
			$(".menu").removeClass("menuOpen");
			$(".overlay").removeClass("overlayOpen");
		}else{
			$(".menu").addClass("menuOpen");
			$(".overlay").addClass("overlayOpen");
			};
	})});

$(document).ready(function(){
	$('.scrollText a, .overlay li').click(
		function(evt){
			evt.preventDefault();
			$("html, body").animate({"scrollTop": $($.attr(this, "href")).offset().top}, 500);
			if($(".overlay").hasClass("overlayOpen")){
			$(".menu").removeClass("menuOpen");
			$(".overlay").removeClass("overlayOpen");}
		});
});
