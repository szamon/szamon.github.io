

$(document).ready(function(){

//VIEWPORT WIdTH CHECK
	function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}

	// var vpWidth = 
	var windowWidth = viewport().width; 


	slideStart();

//ONCLICK MENU

	var menu = $(".menu");
	var overlay = $(".overlay");

	menu.click(function(){
		if(overlay.hasClass("overlayOpen")){
			menu.removeClass("menuOpen");
			overlay.removeClass("overlayOpen");
		}else{
			menu.addClass("menuOpen");
			overlay.addClass("overlayOpen");
			};
	});

	$('.scrollText a, .overlay li').click(
		function(evt){
			evt.preventDefault();
			$("html, body").animate({"scrollTop": $($.attr(this, "href")).offset().top}, 500);
			if($(".overlay").hasClass("overlayOpen")){
			$(".menu").removeClass("menuOpen");
			$(".overlay").removeClass("overlayOpen");}
		});

//SKILLS CAROUSEL

	function slideStart(){
		var previousSlide = $(".arrowLeft");
		var nextSlide = $(".arrowRight");
		var slideChanger = $(".slideChanger");
		var slidesLength = $(".slides img").length;
		var slidesImg = $(".slides img");
		var progressBarImg = $(".progressBar img");
		var slides = $(".slides");
		var counter = 2;
		var negativeMargin;
		var slidePosition;
		if (windowWidth < 768){
				console.log(windowWidth);
				negativeMargin = -240;
		}else if (windowWidth >= 768){
			console.log(windowWidth);
			negativeMargin = -300;
		}
		var sliderStart = function(speed){

			slidePosition = counter*negativeMargin;
			
			slides.animate({"margin-left":slidePosition +"px"}, speed, function(){
				if(counter < slidesLength - 1){
				$(".progressBar img:nth-of-type("+(counter)+")").addClass("active");
				$(".progressBar img:nth-of-type("+(counter-1)+")").removeClass("active");
				$(".progressBar img:nth-of-type("+(counter+1)+")").removeClass("active");
				counter += 1;
				// console.log("dodałem 1 do licznika, licznik: "+counter);
					if(counter < 2){
						$(".progressBar img:nth-of-type(1)").removeClass("active");
						$(".progressBar img:nth-of-type("+(slidesLength-2)+")").addClass("active");
						counter=slidesLength-1;
						$(slides).css("margin-left", "-1920px");
					}
				}else{
				counter = 2;
				// console.log("automatycznie ustawiam licznik na 2, licznik: "+counter);
				$(".progressBar img:nth-of-type("+(counter-1)+")").addClass("active");
				$(".progressBar img:nth-of-type("+(slidesLength-2)+")").removeClass("active");
				$(slides).css("margin-left", negativeMargin+"px");
				}
			});
		}
		var interval = function(){
			// console.log("zaczynam procedurę interval, licznik: "+counter);
			sliderStart(1000);
		}
		if(windowWidth < 992){
			var intervalStart = setInterval(interval, 2000);
			console.log("slidestart interval set");
		}

		function resizedw(){
	    // Haven't resized in 100ms!
	    function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}
		    windowWidth = viewport().width;
			console.log(windowWidth);
			clearInterval(intervalStart);
			console.log("inteval cleared");
			if (windowWidth < 992){
				intervalStart = setInterval(interval, 2000);
				if (windowWidth < 768){
					console.log("inteval set, "+ windowWidth);
					negativeMargin = -240;
				}else if (windowWidth >= 768){
					console.log("inteval set, "+ windowWidth);
					negativeMargin = -300;
					console.log("margin-left set to, "+ negativeMargin);
				}
			}else if (windowWidth >= 992){
				console.log("inteval not set"+ windowWidth);
				slides.css("display", "none");
				function setMarginLeft(){
					slides.css("margin-left", "auto");
					console.log("func setMarginLeft");
					slides.css("display", "block");
				}
				setTimeout(setMarginLeft, 1000);
				clearTimeout
				console.log("margin-left of slides set to: "+ slides.css("margin-left"));
			}
		}	
		var doit;
		window.onresize = function(){
			clearTimeout(doit);
			doit = setTimeout(resizedw, 100);
		};

		var slideChange = function(){
			$(slideChanger).mouseenter(function(){clearInterval(intervalStart); console.log("enter")});
			$(slideChanger).mouseleave(function(){intervalStart = setInterval(interval, 2000); console.log("leave")});
			$(progressBarImg).each(function(e){
				$(this).mouseenter(function(){clearInterval(intervalStart); console.log("enter")});
				$(this).mouseleave(function(){intervalStart = setInterval(interval, 2000); console.log("leave")});
				$(this).click(function(){
					clearInterval(interval);
					counter = e+1;
					$(progressBarImg).each(function(){$(this).removeClass("active");});
					// console.log("Licznik zmienił się na: "+(e+1));
					// console.log("zmiana slajdu");
					sliderStart(100);	
					});
			});
			slideChanger.click(function(evt){
				evt.preventDefault();
				clearInterval(interval);
				counter += parseInt($(this).attr("href"));
				// console.log("Licznik zmienił się o: "+parseInt($(this).attr("href")));
				// console.log("zmiana slajdu");
				sliderStart(100);	
			});
		};
		slideChange();
	}

	//SLIDE IN
	// (function($) {
	// 	$.fn.visible = function(partial) {
		    
	// 	      var $t            = $(this),
	// 	          $w            = $(window),
	// 	          viewTop       = $w.scrollTop(),
	// 	          viewBottom    = viewTop + $w.height(),
	// 	          _top          = $t.offset().top,
	// 	          _bottom       = _top + $t.height(),
	// 	          compareTop    = partial === true ? _bottom : _top,
	// 	          compareBottom = partial === true ? _top : _bottom;
		    
	// 	    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	// 	  };
		    
	// })(jQuery);

	// var module = $(".aboutMe >img:nth-of-type(1), .aboutMe >img:nth-of-type(2), .aboutMe h2, .aboutMe div:nth-of-type(1)");

	// $(window).scroll(function(event) {
	  
	//   module.each(function(i, el) {
	//     var el = $(el);
	//     if (el.visible(true)) {
	//     	if(i===0){
	//     		el.addClass("questionMarkComeIn");
	//     		console.log("pierwszy widoczny");
	//     	}else if(i===1){
	//     		el.addClass("lampBlinkStart");
	//     		console.log("drugi widoczny");
	//     	}else if(i===2){
	//     		el.addClass("headingComeIn");
	//     		console.log("trzeci widoczny");
	//     	}else if(i===3){
	//     		el.addClass("paragraphComeIn");
	//     		console.log("czwarty widoczny");
	//     	}
	//    		console.log(i, el);
	//    	} 
	//   });
	// });
});
