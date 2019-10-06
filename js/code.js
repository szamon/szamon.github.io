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
		this.menu = $(".menuBars");
		//JQuery show menu on click - adds class to show ovelay, or deletes it to hide overlay
		this.showMenu = () => {
			this.menu.click(function(){
				this.menu = $(".menuBars");
				this.overlay = $(".overlay");
				this.nav = $(".navList");
				this.bars = this.menu[0].children;
				this.liItems = this.nav[0].children;
				console.log(this.bars);
				if(this.overlay.hasClass("overlay--open")){
					this.menu.removeClass("menuBars--open");
					this.overlay.removeClass("overlay--open");
					for(let i=0; i<this.bars.length; i++){
						this.bars[i].classList.remove("menuBars__bar"+(i+1)+"--open");
					};
					for(let i=0; i<this.liItems.length; i++){
						this.liItems[i].classList.remove("navList__item--visible");
					};
				}else{
					this.menu.addClass("menuBars--open");
					this.overlay.addClass("overlay--open");
					for(let i=0; i<this.bars.length; i++){
						this.bars[i].classList.add("menuBars__bar"+(i+1)+"--open");
					};
					for(let i=0; i<this.liItems.length; i++){
						this.liItems[i].classList.add("navList__item--visible");
					};
				};
			});
		};
		//scrolls site when arrows on the bottom of each section are clicked or when item in menu is clicked
		this.scroller = () => {
			$('.scrollText__anchor, .navList__item__anchor').click(
				function(evt){
					this.menu = $(".menuBars");
					this.overlay = $(".overlay");
					this.bars = this.menu[0].children;
					evt.preventDefault();
					$("html, body").animate({"scrollTop": $($.attr(this, "href")).offset().top}, 500);
					//if overlay is visible - hide it
					if(this.overlay.hasClass("overlay--open")){
					this.menu.removeClass("menuBars--open");
					this.overlay.removeClass("overlay--open");}
					for(let i=0; i<this.bars.length; i++){
						this.bars[i].classList.remove("menuBars__bar"+(i+1)+"--open");
					};
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
	//constructor function for slider Carousel
	function Carousel(slides, arrows, parrentClass) {
		//slides
		this.slidesData = slides;
		//arrows for slider
		this.arrowsData = arrows;
		//slides for Slides list
		this.slidesData2 = this.slidesData.slice();
		//getting parent element
		this.skills = document.getElementsByClassName(parrentClass)[0];
		//creating slider container
		this.sliderContainer = document.createElement("div");
		this.sliderContainer.className = "slider";
		//appending slider container to the site
		this.skills.appendChild(this.sliderContainer);
		//creating container for slides
		this.slidesContainer = document.createElement("div");
		this.slidesContainer.className = "slidesContainer";
		//appending slides container to the place on the page
		this.sliderContainer.appendChild(this.slidesContainer);
		//creating SlidesList
		this.slidesBar = document.createElement("div");
		this.slidesBar.className = "slidesBar";
		//function creating slides
		this.createSlides = (list, clName) => {
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
		this.createArrows = (arrows) => {
			return arrows.map((x) => {
				let arrow = document.createElement("img");
				arrow.src = x.src;
				arrow.className = x.name;
				arrow.alt = x.alt;
				arrow.style = x.style;
				return arrow;
			})
		};
		//add style to active slide on slidebar
		this.sideBarActive = (action) => {
			let el = this.slidesBar.childNodes[this.visibleSlide];
			if(action === "act"){
				el.classList.add("activeSlide");
			}else if(action === "dis"){
				el.classList.remove("activeSlide");
			}
		};
		//slidechange onclick
		this.slideChange = (e) => {
			let el = e.target;
			if(el.className === "leftArrow" && this.visibleSlide > 0){
				this.sideBarActive("dis");
				this.visibleSlide --;
				this.slideSwap(this.visibleSlide);
			}else if(el.className === "rightArrow" && this.visibleSlide < this.slides.length - 1){
				this.sideBarActive("dis");
				this.visibleSlide ++;
				this.slideSwap(this.visibleSlide);
			}else if(el.hasAttribute("key")){
				this.sideBarActive("dis");
				this.visibleSlide = el.getAttribute("key");
				this.slideSwap(this.visibleSlide);
			};
			this.sideBarActive("act");
		};
			//swap the slides
		this.slideSwap = (slide) => {
			let currentSlide = this.slidesContainer.childNodes[1];
			let currentSlideNr = this.slidesContainer.childNodes[1].getAttribute("key");
			let styleLeft = "transform: translate(-200px, 0); opacity: 0;  transition: all .2s";
			let styleRight = "transform: translate(200px, 0); opacity: 0; transition: all .2s";
			let styleCentered = "transform: translate(0px, 0); opacity: 1; transition: all .2s";
			if(slide < currentSlideNr){
				currentSlide.style = styleRight ;
				setTimeout(() => {this.slidesContainer.removeChild(currentSlide)}, 200);
				setTimeout(() => {
					this.slidesContainer.insertBefore(this.slides[this.visibleSlide], this.slidesContainer.childNodes[1]);
					currentSlide = this.slidesContainer.childNodes[1];
					currentSlide.style = styleLeft;
				}, 200);
				setTimeout(() => {currentSlide.style = styleCentered;}, 220);
			}else if(slide > currentSlideNr){
				currentSlide.style = "transform: translate(-200px, 0); opacity: 0; transition: all .2s";
				setTimeout(() => {this.slidesContainer.removeChild(currentSlide)}, 200);
				setTimeout(() => {
					this.slidesContainer.insertBefore(this.slides[this.visibleSlide], this.slidesContainer.childNodes[1]);
					currentSlide = this.slidesContainer.childNodes[1];
					currentSlide.style = "transform: translate(200px, 0); opacity: 0;  transition: all .2s";
				}, 200);
				setTimeout(() => {currentSlide.style = "transform: translate(0px, 0); opacity: 1; transition: all .2s";}, 220);
			}
		}
		//creating actual slides
		this.slides = this.createSlides(this.slidesData, "slide");
		this.slides2 = this.createSlides(this.slidesData2, "slide2");
		//the same as above with arrows
		this.arrows = this.createArrows(this.arrowsData);
		//appending items to SlideBar
		this.slides2.forEach((x, i) => {
			this.slidesBar.appendChild(x);
		});
		//appending items to slidesContainer
		this.slidesContainer.appendChild(this.arrows[0]);
		this.slidesContainer.appendChild(this.slides[0]);
		this.slidesContainer.appendChild(this.arrows[1]);
		//appending item to sliderContainer
		this.sliderContainer.appendChild(this.slidesBar);
	
		this.arrowsDOM = document.querySelectorAll(".leftArrow, .rightArrow");
		this.visibleSlide = 0;
	
		this.arrowsDOM.forEach((x) => addEventListener("click", this.slideChange));
		this.slidesBar.childNodes.forEach((x) => addEventListener("click", this.slideChange));
		this.sideBarActive("act");
	
		this.slidesContainer.childNodes[1].style.webkitTransition = "all 1s";
		this.slidesContainer.childNodes[1].style = "transform: translate(0, 0); opacity: 1; transition: all .2s";
	};
	
	var slider = new Carousel(slidesData, arrowsData, "skills");
});


