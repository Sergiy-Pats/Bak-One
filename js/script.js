
jQuery('document').ready(function () {

	import('./menu-click.js')
	//burger settings ------------------------------
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__navigation, body').toggleClass('active');
	})

	//parallax settings active ------------------------
	parallax = document.getElementById('home');
	parallaxInstance = new Parallax(parallax, {
		relativeInput: true
	});
	parallaxInstance.friction(0.2, 0.8);
	//filters active items -------------------------------
	$('.filters .filters__item').click(function (e) {
		$('.filters__item').removeClass('active');
		$(this).addClass('active');
	})
	//animation settings ----------------------------------
	animation_lock = false;//optimize scroll function

	//console.log('act');
	let portfolioItems_count = $('.portfolio__items').children().length;//count of elements in block .portfolio__items
	//console.log(portfolioItems_count);


	$(window).on('scroll', function (e) {
		if (animation_lock == false && window.innerWidth > 768) {
			y_pos = window.scrollY;
			//console.log(y_pos);
			portfolio_yPos = $('.portfolio').offset().top;
			//console.log(portfolio_yPos);
			animationStart = portfolio_yPos - y_pos;
			//console.log(animationStart);
			about_yPos = $('.about').offset().top;
			aboutAnimStart = about_yPos - y_pos;


			if (animationStart <= 160 && window.innerWidth >= 768) {

				for (i = 0; i < portfolioItems_count; i++) {
					$('.portfolio__item:nth-child(' + (i + 1) + ')').css({
						'transition': 'opacity ease 1.4s',
						'transition-delay': (i / 3) + 's',
						'opacity': '1',
						'animation': 'portItemRotate 1.4s 1 ' + (i / 3) + 's'
					})
				}

			}
			if (aboutAnimStart <= 160 && window.innerWidth >= 768) {

				$('.team__item:nth-child(1)').css({ 'animation': " about_1 4s 1 forwards", 'display': 'block' });
				$('.team__item:nth-child(2)').css({ 'animation': " about_2 4s 1 forwards", 'display': 'block' });
				$('.team__item:nth-child(3)').css({ 'animation': " about_3 4s 1 forwards", 'display': 'block' });

			}



		}
	})
	if (window.innerWidth < 768) {
		$('.portfolio__item').css({ 'opacity': '1' });

		$('.team__item:nth-child(1)').css({ 'display': 'block' });
		$('.team__item:nth-child(2)').css({ 'display': 'block' });
		$('.team__item:nth-child(3)').css({ 'display': 'block' });
	}






	animate('.home__title', 0);
	animate('.home__text', 1);

	//console.log(i);















})


