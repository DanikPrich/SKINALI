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
})