$(window).load(function() {
	$(".before-after").twentytwenty({
		before_label: 'Without Skinali',
		after_label: 'With Skinali'
	});
	$('.before-slider').slick({
		draggable: false,
		dots: true,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
		dotsClass: 'before-slider__dots'
	});
	$('.menu-button').on('click', () => {
		$('.menu').toggleClass('menu_active')
	});

	/* Select settings */
	$('.select_checked').on('click', () => {
		$('.select__dropdown').toggleClass('select__dropdown_open')
	})

	$('.select__option').on('click', function(){
		var value = $(this).attr('data-value');
		$('#select-type').val(value)
		$('.select_checked').text(value)
		$('.select__dropdown').toggleClass('select__dropdown_open')
	})

	$("a[href^='#']").click(function() {
		let _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top -200 + "px"});
		return false;
	})
	
	$('input[type="tel"]').mask("+421 (999) 999-999")


	/* Show map only if you reached it */
	/* let reviews = $('.reviews'),
			reviewsTop = reviews.offset().top
	$(window).bind('scroll', function() {
		var windowTop = $(this).scrollTop();
		if(windowTop > reviewsTop) {
			$('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A408c74e9600887b2a5116866568771a920e3f6145552df35c2388c1e4d049af2&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=falce"></script>')
			$(window).unbind('scroll')
		}
	}) */

})