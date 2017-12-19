$(function(){
	console.log('ready');
    $(".button-collapse").sideNav();
	AOS.init();
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		offset: 100
	});
});