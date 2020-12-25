new Swiper('.swiper-container', {
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enable: true,
		onlyInViewport: true,
	},
	grabCursor: true,
	autoplay: {
		delay: 1500,
		stopInLastSlide: false,
		disableOnInteraction: true,
	},
	speed: 800,
});
