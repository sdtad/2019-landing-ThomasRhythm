$(function(){

$('.btn-menu').on('click', function(){
	$('.menu ul').slideToggle();
});

$(".services__items .tabs__wrapper .tab").click(function() {
	$(".services__items .tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".services__items .tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.slider__inner').slick({
	dots: true,
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	infinite: false
});

var mixer = mixitup('.portfolio__container'); 


$('.map__content').on('click', function(){
	$('.map__inner').toggleClass('open');
});

$(".menu, .go__to-home").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор бока с атрибута href
	var id  = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	
	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({scrollTop: top}, 1500);
});

// var mixer = mixitup('.portfolio__container');

});