$(document).ready(function() {
	// Инициализация слайдера
	$('.slider__container').owlCarousel({
		loop:true,
		nav:true,
		navText: ["<img src='img/w-prev-arrow.png'>","<img src='img/w-next-arrow.png'>"],
		dots: true,
		items: 1,
		animateOut: 'animate__fadeOut',
    	animateIn: 'animate__fadeIn',
    	responsive: {
    		0 : {
    			nav: false
    		},
    		1200 : {
    			nav: true
    		}
    	}
	});
	// Пагинация слайдера
	$('.owl-dot').each(function(i) {
		$(this).html("0" + ++i);
	});
	// Слайдер каталога товаров
	$('.catalog__slider').owlCarousel({
		loop:false,
		nav:false,
		items: 1,
		margin: 30,

		onInitialized: function() {
			if ($(".owl-item:first-child").hasClass("active")) {
				console.log('+')
				$('.catalog__arrow-prev').addClass('catalog__arrow-disabled');
			}
			else {
				$('.catalog__arrow-prev').removeClass('catalog__arrow-disabled');
			}
		},
		onTranslated: function() {
			if ($(".owl-item:first-child").hasClass("active")) {
				$('.catalog__arrow-prev').addClass('catalog__arrow-disabled');
			}
			else {
				$('.catalog__arrow-prev').removeClass('catalog__arrow-disabled');
			}

			if ($(".owl-item:last-child").hasClass("active")) {
				$('.catalog__arrow-next').addClass('catalog__arrow-disabled');
			}
			else {
				$('.catalog__arrow-next').removeClass('catalog__arrow-disabled');
			}
		}
	});
	// Инициализация кастомных кнопок слайдера
	$('.catalog__arrow-prev').on("click", function() {
		$('.catalog__slider').trigger('prev.owl.carousel');
	});
	$('.catalog__arrow-next').on("click", function() {
		$('.catalog__slider').trigger('next.owl.carousel');
	});
	// Бургер меню
	$(".header__burger").on("click", function() {
		if ($(this).hasClass("header__burger-active")) {
			$(this).removeClass("header__burger-active");
			$(".nav").removeClass("nav-active");
		}	
		else {	
			$(this).addClass("header__burger-active");
			$(".nav").addClass("nav-active");
		}
	});
});