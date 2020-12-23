(function () {
	ymaps.ready(function () {
		let map = new ymaps.Map('map', {
			center: [53.18793982021581,50.09011833541452],
			zoom: 18,
			controls: ['zoomControl'],
			behaviors: ['drag'],
		});

		let placemark = new ymaps.Placemark(
			[53.18793982021581, 50.09011833541452],
			{
				hintContent: 'Авторские дессерты ручной работы',
				balloonContent:
					'<h3>Порадуйте своих родных и близких!</h3><b>Разработаем дизайн, главное фантазия<b>',
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '../images/decor/map-marker.svg',
				iconImageSize: [35, 35],
				iconImageOffset: [-5, -30],
			},
		);

		map.geoObjects.add(placemark);
	});
})();
