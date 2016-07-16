
(function (eor, win) {

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

	eor.justStopIt = justStopIt;

	function bringIntoView(goTo) {  
		var elem = $(goTo);
		var offset = elem.offset();
		var top = offset.top;

		$("html,body").animate({ scrollTop: top }, 2000); 
	}

	function goToMusic () {
		bringIntoView('body');
	}

	eor.goToMusic = goToMusic;

	function goToLive () {
		bringIntoView('#live');
	}

	eor.goToLive = goToLive;

	function goToSocial () {
		bringIntoView('#social');
	}

	eor.goToSocial = goToSocial;

	function goToContact () {
		bringIntoView('#contact');
	}

	eor.goToContact = goToContact;

	win.EoR = eor;

}(EoR || {}, window))
