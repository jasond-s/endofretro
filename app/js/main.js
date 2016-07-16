
(function () {
	var animon = true;

	function justStopIt() {
		$('.wrap').toggleClass('stop');
		$('.wrap-anim').toggleClass('stop');

		if (animon)
		  $('.cube-anim span').text('turn animation on');
		else 
		  $('.cube-anim span').text('turn animation off');

		animon = !animon;
	}

	function bringIntoView(goTo) {  
		var elem = $(goTo);
		var offset = elem.offset();
		var top = offset.top;

		$("html,body").animate({ scrollTop: top }, 2000); 
	}

	function goToMusic () {
		bringIntoView('body');
	}
	function goToLive () {
		bringIntoView('#live');
	}
	function goToSocial () {
		bringIntoView('#social');
	}
	function goToContact () {
		bringIntoView('#contact');
	}
}())
