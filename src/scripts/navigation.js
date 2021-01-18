(function () {
	const openMenu = document.querySelector('.menu-button');
	const navigation = document.querySelector('.navigation');
	const navigationLogo = document.querySelector('.navigation__link');
	const headerLogo = document.querySelector('.logo');
	const links = document.querySelectorAll('.menu__link');
	const overlay = document.querySelector('.overlay-navigation');
	const body = document.body;


	function toggleMenu(e) {
		openMenu.classList.toggle('displayed')
		navigation.classList.toggle('navigation--active');
		headerLogo.classList.toggle('hidden');
		navigationLogo.classList.toggle('vissible');
		body.classList.toggle('hidden');
		overlay.classList.toggle('show')
	}

	links.forEach(link => {
		link.addEventListener('click', e => {
			if (navigation.classList.contains('navigation--active')) {
				toggleMenu(e);
			}
		});
	});

	overlay.addEventListener('click', toggleMenu);
	openMenu.addEventListener('click', toggleMenu);
})();
