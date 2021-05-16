


function animate(block, num) {
	delay = 30;

	$text = $(block).html();
	$(block).css({ 'visibility': 'hidden' });
	$textLength = $(block).html().length;

	$textArray = [];
	$textArray[num] = $text;
	$lengthArray = [];
	$lengthArray[num] = $textLength;
	$lengthArray_old = [];
	$lengthArray_old = $lengthArray[num];

	let delay_old = [];
	delay_old[num] = delay;
	//console.log(delay_old[num]);



	if (num == 0) {
		delay_q = 0;
		time_q = $lengthArray[num];
		$lengthArray_old = $lengthArray[num];
	}
	if (num >= 1) {
		delay_q_old = delay_q;
		delay_q = time_q + delay_q_old;
		time_q = $lengthArray[num];


	}

	setTimeout(function inputAnimate() {
		$text = $(block).html();

		$textLength = $(block).html().length;

		$(block).html('');
		$textArray = [];
		$textArray[num] = $text;
		$lengthArray = [];
		$lengthArray[num] = $textLength;
		//console.log($textArray[num]);



		for (let i = 0; i <= $lengthArray[num]; i++) {
			setTimeout(function timer() {
				//console.log($lengthArray_old);

				//$(block).html($textArray[(num)].substr(0, i));
				$(block).css({ 'visibility': 'visible' })

				if (i < 1) {

					let oldText;
					newText = $textArray[num].charAt(i);
				} else {

					newText = oldText + $textArray[num].charAt(i);
				}
				$(block).html(newText);

				oldText = newText;
				//console.log(i);



			}, i * delay);
		}



	}, delay_q * delay)



}



/*
function animate(block) {
	var string = $(block).html();
	return $(block).each(function () {
		var $this = $(this);
		$this.html(string.replace(/./g, '$&'));
		$this.find($this).each(function (i, el) {
			setTimeout(function () { $(el).addClass('div_opacity'); }, 400 * i);

		});
	});
};
*/
