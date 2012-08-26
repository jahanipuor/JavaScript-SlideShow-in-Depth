window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);

	var train = slideshow.getElementsByClassName('train').item(0);
	var currentSlide = 0;

	go2slide = function (n) {
		if(n>lists.length-1) n=0;
		train.style.left=(-450*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide=n;
	}

	nextSlide = function(){
		go2slide(currentSlide+1);
	}

	var autoPlayIv = false;
	autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,2000);
	}

	autoPlayStop = slideshow.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}

	/*
	slideshow.onmouseover=function(){
		autoPlayStop();
	}
	slideshow.onmouseout=function(){
		autoPlayStart();
	}
	*/

	// or
	
	/*
	slideshow.onmouseover = autoPlayStop;
	slideshow.onmouseout = autoPlayStart;
	*/

	go2slide(0); // set active of first li
	autoPlayStart();
}