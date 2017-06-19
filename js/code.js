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

function slideStart(){
	var slides = $(".slides");
	var counter = 1;
	var interval = setInterval(function(){
		var slider = function(){
			slides.animate({"margin-left":"-=240px"}, 1000, function(){
				if(counter < slides.length){
				counter +=1;
				console.log("okrążenie="+counter);
				$(".progressBar img:nth-of-type("+counter+")").addClass("active");
				$(".progressBar img:nth-of-type("+(counter-1)+")").removeClass("active");
			}else{
				counter = 1;
				$(".progressBar img:nth-of-type("+slides.length+")").removeClass("active");
			}
			});}
			slider();
	}, 3000);
}



slideStart();

