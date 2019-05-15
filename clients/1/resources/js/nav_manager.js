$(document).ready(function(){
	"use strict";
	$('a#nav-toggle').click(function(e){
		e.stopPropagation();
		ToggleNav();
	});
	
	$('body').click(function(){
		if(canClose){
			CloseNav();
			canClose = false;
		}
	});
	$('#side-nav').click(function(e){
		e.stopPropagation();
	});
	$(window).resize(function(){
		if(canClose){
			CloseNav();
			canClose = false;
		}
	});
	body = document.getElementById('body-container');
	$(body).scroll(function(){
		if(body.scrollTop > navheight){
			$('#sticky-nav').addClass('stuck');
			$('.nav-placeholder').css({'height': navheight+'px'});
			if(isOpen){
				$('#sticky-nav').css({'left': '200px'});
			}
		}else if(body.scrollTop < navheight/2){
			$('#sticky-nav').removeClass('stuck');
			$('.nav-placeholder').css({'height': '0px'});
			if(isOpen){
				$('#sticky-nav').css({'left': '0px'});
			}
		}
	});
});

var body = '';
var navheight = 50;
	
function ScrollTo(el){
	$(body).scrollTo($('#'+el), {
		axis: 'y',
		duration: 800,
	});
}

var canClose = false;
var isOpen = false;
function ToggleNav(){
	"use strict";
	if(isOpen){
		isOpen = false;
		$('#side-nav').animate({'left': '-200px'});
		$('#body-container').animate({'left':'0px'});
		$('#sticky-nav').animate({'left':'0px'});
	}else{
		isOpen = true;
		$('#side-nav').animate({'left': '0px'});
		$('#sticky-nav.stuck').animate({'left':'200px'});
		$('#body-container').animate({'left':'200px'}, function(){
		canClose = true;
		});
	}
}

function CloseNav(){
	"use strict";
	if(isOpen){
		isOpen = false;
		$('#side-nav').animate({'left': '-200px'});
		$('#body-container').animate({'left':'0px'});
		$('#sticky-nav').animate({'left':'0px'});
	}
}