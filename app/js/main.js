
(function (eor, win) {

	window.setTimeout(function () {
		$('.loading-container').fadeOut(1000, function () {
			$('.loading').fadeOut(2000, function () {
				$('.loading').css({display: 'none'});
			});
		});
	}, 3000);

	var animon = true;

	function justStopIt() {
		$('.wrap').toggleClass('stop');
		$('.wrap-anim').toggleClass('stop');
		$('.wrap-nav').toggleClass('stop');
		$('.marquee').toggleClass('stop');
		$('.background-anim').toggleClass('stop');

		if (animon)
		  $('.cube-anim .btn span').text('get in the sea');
		else 
		  $('.cube-anim .btn span').text('stop this madness');

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
