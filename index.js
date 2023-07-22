

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.pgn',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return (
				'<span class="' +
				currentClass +
				'"></span>' +
				' <b class="light"><pre style="display:inline"> —— </pre></b> ' +
				'<span class="' +
				totalClass +
				'"></span>'
			)
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 50,
		slideShadows: false,
	},
})



var firstShowFlag = true;

window.addEventListener("scroll", function() {
    var elements = document.querySelectorAll('.active');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isElementInViewport(element) && firstShowFlag) {
            var numbers = element.getElementsByClassName('data');
            for (var j = 0; j < numbers.length; j++) {
                animateNumber(numbers[j]);
            }
            firstShowFlag = false; // Устанавливаем флаг первого показа в значение false после первого показа блока
        }
    }
});

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateNumber(numberElement) {
    var startValue = 0;
    var endValue = parseInt(numberElement.innerText);
    var duration = 1000; // 1 second
    var interval = 10; // update interval in milliseconds
    var step = (endValue - startValue) / (duration / interval);
    var current = startValue;
  
    var timer = setInterval(function() {
        current += step;
        numberElement.innerText = Math.round(current);
      
        if (current >= endValue) {
            clearInterval(timer);
            numberElement.innerText = endValue;
        }
    }, interval);
}