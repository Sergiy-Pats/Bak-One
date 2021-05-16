
// При старте ссайта с разширением меньше 768 слайдер активен
//if (window.innerWidth <= 768) {
function slider_1() {
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6200,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotHover: false,
		speed: 800,
		dots: true,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick'
			},
		]
	});
}
function slider_2() {

	$('.slider-2').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		autoplaySpeed: 6200,
		speed: 800,
		arrows: false,
		mobileFirst: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [

			{
				breakpoint: 10000,
				settings: 'unslick'
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
				}
			},
		]

	});
}
function slider_3() {
	$(".slider-3").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	})
}
function slider_4() {
	$('.slider-4').slick({
		slidesToShow: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 10000,
				settings: 'unslick'
			},
			{
				breakpoint: 1024,
				settings: {

					centerMode: true,
					variableWidth: true,
				}
			},
			{
				breakpoint: 440,
				settings: {
					variableWidth: false,
					centerMode: false
				}
			}
		]



	})
}

slider_3();
if ($(window).width() <= 1024) {
	slider_4();
}
if ($(window).width() <= 768) {
	slider_1();
	slider_2();
}
//}
//динамическое вкл\выкл слайдера

$(window).on('resize', function () {
	//console.log('width = ' + window.innerWidth);
	let $windowWidth = $('windwow').width();
	if ($windowWidth <= 768 && $('.slider-2').hasClass('slick-initialized')) {
		//$('.slider').slick(unslick);
		//$('.slider-2').slick(unslick);
	}
	else {
		slider_1();
		slider_2();
	}
	if ($windowWidth <= 1024 && $('.slider-4').hasClass('slick-initialized')) {
		//$('.slider').slick(unslick);
		//$('.slider-2').slick(unslick);
	}
	else {

		slider_4();
	}
})
