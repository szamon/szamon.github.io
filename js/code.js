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

	//var windowWidth = viewport().width; 

//ONCLICK NAV

	var navigation = new function Navi() {
		this.menu = $(".menu");
		//JQuery show menu on click - adds class to show ovelay, or deletes it to hide overlay
		this.showMenu = () => {
			this.menu.click(function(){
				this.menu = $(".menu");
				this.overlay = $(".overlay");
				if(this.overlay.hasClass("overlayOpen")){
					this.menu.removeClass("menuOpen");
					this.overlay.removeClass("overlayOpen");
				}else{
					this.menu.addClass("menuOpen");
					this.overlay.addClass("overlayOpen");
				};
			});
		};
		//scrolls site when arrows on the bottom of each section are clicked or when item in menu is clicked
		this.scroller = () => {
			$('.scrollText a, .overlay li').click(
				function(evt){
					this.menu = $(".menu");
					this.overlay = $(".overlay");
					evt.preventDefault();
					$("html, body").animate({"scrollTop": $($.attr(this, "href")).offset().top}, 500);
					//if overlay is visible - hide it
					if(this.overlay.hasClass("overlayOpen")){
					this.menu.removeClass("menuOpen");
					this.overlay.removeClass("overlayOpen");}
			});
		};
	};

	navigation.showMenu();
	navigation.scroller();

	//ABOUT ME SLIDE IN

	var showMe = new function MakeItAppear() {
		//checks if item is visible
		this.visibilityCheck = (function($) {
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
		
		//if item is visible - apply class
		this.showMeItems = $(window).scroll(function(event) {
			this.modules = $(".aboutMe >img:nth-of-type(1), .aboutMe >img:nth-of-type(2), .aboutMe h2, .aboutMe div:nth-of-type(1)");
			this.aboutMe = $(".aboutMe");
			this.portfolio = $(".portfolio");
			this.portfolioItems = $(".portfolioItem");
			if(aboutMe.visible(true)){
				modules.each(function(i, el) {
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
	};


	//SKILLS SLIDER

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
	function createSlides(list, clName){
		return list.map((x, i) => {
			let slide = document.createElement("img");
			slide.src = x.src;
			slide.alt = x.alt;
			slide.setAttribute("key", i);
			slide.className = clName;
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

	let slides = createSlides(slidesData, "slide");
	let slides2 = createSlides(slidesData2, "slide2");
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
});