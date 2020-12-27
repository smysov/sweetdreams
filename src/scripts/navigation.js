(function () {
	const openMenu = document.querySelector('.menu-button');
	const navigation = document.querySelector('.navigation');
	const navigationLogo = document.querySelector('.navigation__link');
	const headerLogo = document.querySelector('.logo');
	const links = document.querySelectorAll('.menu__link');
	const overlay = document.querySelector('.overlay-navigation');
	const body = document.body;


	function toggleMenu(e) {
		e.stopPropagation();
		navigation.classList.toggle('navigation--active');
		headerLogo.classList.toggle('hidden');
		navigationLogo.classList.toggle('vissible');
		body.classList.toggle('hidden');
		overlay.classList.toggle('show')
	}

	function closeMenu({ target }) {
		if (!navigation.contains(target)) {
			navigation.classList.remove('navigation--active');
			headerLogo.classList.remove('hidden');
			navigationLogo.classList.remove('vissible');
			body.classList.remove('hidden');
			overlay.classList.remove('show');
		}
	}

	links.forEach(link => {
		link.addEventListener('click', e => {
			if (navigation.classList.contains('navigation--active')) {
				toggleMenu(e);
			}
		});
	});

	overlay.addEventListener('click', closeMenu);
	openMenu.addEventListener('click', toggleMenu);
})();
