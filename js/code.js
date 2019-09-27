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

	var windowWidth = viewport().width; 

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
			if(overlay.hasClass("overlayOpen")){
			menu.removeClass("menuOpen");
			overlay.removeClass("overlayOpen");}
		});

//SKILLS CAROUSEL

	// function slideStart(){
	// 	var previousSlide = $(".arrowLeft");
	// 	var nextSlide = $(".arrowRight");
	// 	var slideChanger = $(".slideChanger");
	// 	var slidesLength = $(".slides img").length;
	// 	var slidesImg = $(".slides img");
	// 	var progressBarImg = $(".progressBar img");
	// 	var slides = $(".slides");
	// 	var counter = 2;
	// 	var negativeMargin;
	// 	var slidePosition;
	// 	if (windowWidth < 768){
	// 		//console.log(windowWidth);
	// 		negativeMargin = -240;
	// 	}else if (windowWidth >= 768){
	// 		//console.log(windowWidth);
	// 		negativeMargin = -300;
	// 	}

	// 	function sliderMove(speed){

	// 		slidePosition = counter*negativeMargin;
			
	// 		slides.animate({"margin-left":slidePosition +"px"}, speed, function(){
	// 			if(counter < slidesLength - 1){
	// 			$(".progressBar img:nth-of-type("+(counter)+")").addClass("active");
	// 			$(".progressBar img:nth-of-type("+(counter-1)+")").removeClass("active");
	// 			$(".progressBar img:nth-of-type("+(counter+1)+")").removeClass("active");
	// 			counter += 1;
	// 			// console.log("dodałem 1 do licznika, licznik: "+counter);
	// 				if(counter < 2){
	// 					$(".progressBar img:nth-of-type(1)").removeClass("active");
	// 					$(".progressBar img:nth-of-type("+(slidesLength-2)+")").addClass("active");
	// 					counter=slidesLength-1;
	// 					$(slides).css("margin-left", (slidesLength-2)*negativeMargin + "px");
	// 				}
	// 			}else{
	// 			counter = 2;
	// 			// console.log("automatycznie ustawiam licznik na 2, licznik: "+counter);
	// 			$(".progressBar img:nth-of-type("+(counter-1)+")").addClass("active");
	// 			$(".progressBar img:nth-of-type("+(slidesLength-2)+")").removeClass("active");
	// 			$(slides).css("margin-left", negativeMargin+"px");
	// 			}
	// 		});
	// 	}

	// 	var interval = function(){
	// 		// console.log("zaczynam procedurę interval, licznik: "+counter);
	// 		slides.stop(true,true);
	// 		sliderMove(1000);
	// 	}

	// 	if(windowWidth < 992){
	// 		var intervalStart = setInterval(interval, 2000);
	// 		//console.log("slidestart interval set");
	// 	}

	// 	function resizedw(){
	// 	    function viewport() {
	// 		    var e = window, a = 'inner';
	// 		    if (!('innerWidth' in window )) {
	// 		        a = 'client';
	// 		        e = document.documentElement || document.body;
	// 		    }
	// 		    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	// 		}

	// 	    windowWidth = viewport().width;
	// 		//console.log(windowWidth);
	// 		clearInterval(intervalStart);
	// 		//console.log("inteval cleared");
	// 		if (windowWidth < 992){
	// 			intervalStart = setInterval(interval, 2000);
	// 			if (windowWidth < 768){
	// 				//console.log("inteval set, "+ windowWidth);
	// 				negativeMargin = -240;
	// 			}else if (windowWidth >= 768){
	// 				//console.log("inteval set, "+ windowWidth);
	// 				negativeMargin = -300;
	// 				//console.log("margin-left set to, "+ negativeMargin);
	// 			}
	// 		}else if (windowWidth >= 992){
	// 			//console.log("inteval not set"+ windowWidth);
	// 			slides.css("display", "none");
	// 			function setMarginLeft(){
	// 				slides.css("margin-left", "auto");
	// 				//console.log("func setMarginLeft");
	// 				slides.css("display", "block");
	// 			}
	// 			setTimeout(setMarginLeft, 1000);
	// 			clearTimeout
	// 			//console.log("margin-left of slides set to: "+ slides.css("margin-left"));
	// 		}
	// 	}

	// 	var doit;
	// 	window.onresize = function(){
	// 		clearTimeout(doit);
	// 		doit = setTimeout(resizedw, 100);
	// 	};

	// 	function slideChange(){
	// 		$(slideChanger).mouseenter(function(){clearInterval(intervalStart); /*console.log("enter")*/});
	// 		$(slideChanger).mouseleave(function(){intervalStart = setInterval(interval, 2000); /*console.log("leave")*/});
	// 		$(progressBarImg).each(function(e){
	// 			$(this).mouseenter(function(){clearInterval(intervalStart); /*console.log("enter")*/});
	// 			$(this).mouseleave(function(){intervalStart = setInterval(interval, 2000); /*console.log("leave")*/});
	// 			$(this).click(function(){
	// 				clearInterval(interval);
	// 				counter = e+1;
	// 				$(progressBarImg).each(function(){$(this).removeClass("active");});
	// 				// console.log("Licznik zmienił się na: "+(e+1));
	// 				// console.log("zmiana slajdu");
	// 				sliderMove(100);	
	// 			});
	// 		});
	// 		slideChanger.click(function(evt){
	// 			evt.preventDefault();
	// 			clearInterval(interval);
	// 			counter += parseInt($(this).attr("href"));
	// 			// console.log("Licznik zmienił się o: "+parseInt($(this).attr("href")));
	// 			// console.log("zmiana slajdu");
	// 			sliderMove(100);	
	// 		});
	// 	};
	// 	slideChange();
	// }

	//slideStart();

	//ABOUT ME SLIDE IN
	(function($) {
		$.fn.visible = function(partial) {
		    
		      var $t            = $(this),
		          $w            = $(window),
		          viewTop       = $w.scrollTop(),
		          viewBottom    = viewTop + $w.height(),
		          _top          = $t.offset().top,
		          _bottom       = _top + $t.height(),
		          compareTop    = partial === true ? _bottom : _top,
		          compareBottom = partial === true ? _top : _bottom;
		    
		    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

		 };
		    
	})(jQuery);

	var module = $(".aboutMe >img:nth-of-type(1), .aboutMe >img:nth-of-type(2), .aboutMe h2, .aboutMe div:nth-of-type(1)");
	var aboutMe = $(".aboutMe");
	var portfolio = $(".portfolio");
	var portfolioItems = $(".portfolioItem");

	$(window).scroll(function(event) {
		if(aboutMe.visible(true)){
			module.each(function(i, el) {
			    var el = $(el);
		    	if(i===0){
		    		el.addClass("questionMarkComeIn");
		    	}else if(i===1){
		    		el.addClass("lampBlinkStart");
		    	}else if(i===2){
		    		el.addClass("headingComeIn");
		    	}else if(i===3){
		    		el.addClass("paragraphComeIn");
		    	}
			});
		}
		if(portfolio.visible(true)){
			portfolioItems.addClass("portfolioItemVisible");
		};
	});
});

//SKILLS SLIDER

//data to create imgs for slider
const slidesData = [
	{
		name: "html5",
		src: "img/html5.png",
		alt: "HTML5 icon"
	},
	{
		name: "CSS3",
		src: "img/css32.png",
		alt: "CSS3 icon"
	},
	{
		name: "JS",
		src: "img/javascript_logo.png",
		alt: "JS icon"
	},
	{
		name: "JQuery",
		src: "img/jquery.png",
		alt: "JQUery icon"
	},
	{
		name: "SASS",
		src: "img/sass.png",
		alt: "SASS icon"
	},
	{
		name: "Boostrap",
		src: "img/bootstrap.png",
		alt: "Bootstrap icon"
	},
	{
		name: "Git",
		src: "img/git.png",
		alt: "Git icon"
	},
	{
		name: "PSD",
		src: "img/psd.png",
		alt: "PSD icon"
	},
	{
		name: "React",
		src: "img/react.png",
		alt: "React icon"
	}
];

const arrowsData = [
	{
		name: "leftArrow",
		src: "img/arrowDownWhite.png",
		alt: "leftArrow",
		style: "transform: rotate(90deg)"
	},
	{
		name: "rightArrow",
		src: "img/arrowDownWhite.png",
		alt: "rightArrow",
		style: "transform: rotate(-90deg)"
	}
];
// .replaceChild was removing img from progress bar, so I copy data into another const
const slidesData2 = slidesData.slice();

const skills = document.getElementsByClassName("skills")[0];
const sliderContainer = document.createElement("div");
sliderContainer.className = "slider";
skills.appendChild(sliderContainer);

const slidesContainer = document.createElement("div");
slidesContainer.className = 'slidesContainer';
sliderContainer.appendChild(slidesContainer);

const slidesBar = document.createElement("div");
slidesBar.className = "slidesBar";
sliderContainer.appendChild(slidesBar);

//creating imgs from slidesData
function createSlides(list){
	return list.map((x, i) => {
		let slide = document.createElement("img");
		slide.src = x.src;
		slide.alt = x.alt;
		slide.setAttribute("key", i);
		slide.className = "slide";
		return slide;
	})
};
//the same as above with arrows
function createArrows(arrows){
	return arrows.map((x) => {
		let arrow = document.createElement("img");
		arrow.src = x.src;
		arrow.className = x.name;
		arrow.alt = x.alt;
		arrow.style = x.style;
		return arrow;
	})
};

let slides = createSlides(slidesData);
let slides2 = createSlides(slidesData2);
let arrows = createArrows(arrowsData);

//appending images for slidesBar
slides2.forEach((x, i) => {
	slidesBar.appendChild(x);
});

slidesContainer.appendChild(arrows[0]);
slidesContainer.appendChild(slides[0]);
slidesContainer.appendChild(arrows[1]);

let arrowsDOM = document.querySelectorAll(".leftArrow, .rightArrow");

arrowsDOM.forEach((x) => addEventListener("click", slideChange));
slidesBar.childNodes.forEach((x) => addEventListener("click", slideChange));
let visibleSlide = 0;
sideBarActive("act");

//slidesContainer.childNodes[1].style.webkitTransition = "all 1s";
slidesContainer.childNodes[1].style = "transform: translate(0, 0); opacity: 1; transition: all .2s";


//slidechange onclick
function slideChange(e){
	let el = e.target;
	if(el.className === "leftArrow" && visibleSlide > 0){
		sideBarActive("dis");
		visibleSlide --;
		slideSwap(visibleSlide);
	}else if(el.className === "rightArrow" && visibleSlide < slides.length - 1){
		sideBarActive("dis");
		visibleSlide ++;
		slideSwap(visibleSlide);
	}else if(el.hasAttribute("key")){
		sideBarActive("dis");
		visibleSlide = el.getAttribute("key");
		slideSwap(visibleSlide);
	};
	sideBarActive("act");
};

//add style to active slide on slidebar
function sideBarActive(action){
	let el = slidesBar.childNodes[visibleSlide];
	if(action === "act"){
		el.classList.add("activeSlide");
	}else if(action === "dis"){
		el.classList.remove("activeSlide");
	}
}

//swap the slides
function slideSwap(slide){
	let currentSlide = slidesContainer.childNodes[1];
	let currentSlideNr = slidesContainer.childNodes[1].getAttribute("key");
	console.log(currentSlideNr, visibleSlide);
	let styleLeft = "transform: translate(-200px, 0); opacity: 0;  transition: all .2s";
	let styleRight = "transform: translate(200px, 0); opacity: 0; transition: all .2s";
	let styleCentered = "transform: translate(0px, 0); opacity: 1; transition: all .2s";
	if(slide < currentSlideNr){
		currentSlide.style = styleRight ;
		setTimeout(() => {slidesContainer.removeChild(currentSlide)}, 200);
		setTimeout(() => {
			slidesContainer.insertBefore(slides[visibleSlide], slidesContainer.childNodes[1]);
			currentSlide = slidesContainer.childNodes[1];
			currentSlide.style = styleLeft;
		}, 200);
		setTimeout(() => {currentSlide.style = styleCentered;}, 220);
	}else if(slide > currentSlideNr){
		currentSlide.style = "transform: translate(-200px, 0); opacity: 0; transition: all .2s";
		setTimeout(() => {slidesContainer.removeChild(currentSlide)}, 200);
		setTimeout(() => {
			slidesContainer.insertBefore(slides[visibleSlide], slidesContainer.childNodes[1]);
			currentSlide = slidesContainer.childNodes[1];
			currentSlide.style = "transform: translate(200px, 0); opacity: 0;  transition: all .2s";
		}, 200);
		setTimeout(() => {currentSlide.style = "transform: translate(0px, 0); opacity: 1; transition: all .2s";}, 220);
	}
}

