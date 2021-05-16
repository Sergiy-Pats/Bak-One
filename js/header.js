$('.header').addClass('fix');
let y_start = window.scrollY;
//console.log('y-start = ' + y_start);

if (y_start >= 2) {
	//console.log(y_start);
	let headerHeight = $('.header').css({ 'height': '50px', 'background-color': '#ebeaf9' });
}/* else {
	let headerHeight = $('.header').css({ 'height': '180px', 'background-color': '#ebeaf900' });
}*/

let scrollPos = 0;
window.addEventListener('scroll', function () {
	let y = scrollY;
	//console.log('y = ' + y);
	let cnt_w = $('.hero').innerHeight();
	//console.log(cnt_w);
	/*
			if (y >= cnt_w) {
				$('.header').addClass('fix')
			}
			else if (y < cnt_w) {
				$('.header').removeClass('fix')
			}*/
	let up = $(window).scrollTop();
	//console.log('up = ' + up);
	//console.log('pos = ' + scrollPos);

	//console.log('scrollPos = ' + scrollPos);
	//опа
	if (up <= scrollPos) {
		$('.header').addClass('fix')
	} else if (up => scrollPos) {
		$('.header').removeClass('fix')
	}
	scrollPos = up;
	if (y >= 2) {
		let headerHeight = $('.header').css({ 'height': '50px', 'background-color': '#ebeaf9' });
	} else if (y < 2 && window.innerWidth > 840) {
		let headerHeight = $('.header').css({ 'height': '180px', 'background-color': '#ebeaf900' });
	}

});
$(window).on("resize", function () {
	let y_head = window.scrollY;
	let wdth_head = window.innerWidth;
	//console.log("WDTH = " + wdth_head);

	if (wdth_head < 840) {
		let headerHeight = $('.header').css({ 'height': '50px', 'background-color': '#ebeaf9' });
	} else if (wdth_head > 840 && y_head < 2) {
		let headerHeight = $('.header').css({ 'height': '180px', 'background-color': '#ebeaf900' });
	}
})

//asdasdasdasd
onmousemove = function (e) {
	//console.log("mouse location:", e.clientX, e.clientY)
	if (e.clientY <= 30) {
		$('.header').addClass('fix')
	}
}
/*
if (y >= 2) {
	let headerHeight = $('.header').css({ 'height': '50px', 'background-color': '#ebeaf9' });
} else if (y < 2 && window.innerWidth > 840) {
	let headerHeight = $('.header').css({ 'height': '180px', 'background-color': '#ebeaf900' });
};*/


