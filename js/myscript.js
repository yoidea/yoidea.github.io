$(function(){
	function updateNav(){
		var position = $(window).scrollTop();
		var offsets = [];
		var navCount = $(".nav-link").length;
		var idName;
		var navNames = [];
		for (var i = 0; i < navCount; i++){
			idName = $(".nav-link").eq(i).children("a").attr("href");
			navNames[i] = $(".nav-link").eq(i).children("a").text();
			offsets[i] = $(idName).offset().top - 64;
		}
		$(".nav-link").removeClass("active");
		for (var i = navCount - 1; i >= 0; i--){
			if (position >= offsets[i]){
				$(".nav-link").eq(i).addClass("active");
				$("#status").text(navNames[i]);
				break;
			}
		}
	}
	$('a').smoothScroll({offset: -64});
	$(window).scroll(updateNav);
	Materialize.showStaggeredList('.chip')
});