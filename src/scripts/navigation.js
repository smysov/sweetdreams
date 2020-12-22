(function () {
	const openMenu = document.querySelector('.menu-button');
	const navigation = document.querySelector('.navigation');
	const navigationLogo = document.querySelector('.navigation__link');
	const headerLogo = document.querySelector('.logo');
	const links = document.querySelectorAll('.menu__link');
	const wrapper = document.querySelector('.wrapper');
	const body = document.body;

	function toggleMenu(e) {
		e.stopPropagation();
		openMenu.classList.toggle('opened');
		navigation.classList.toggle('navigation--active');
		headerLogo.classList.toggle('hidden');
		navigationLogo.classList.toggle('vissible');
		body.classList.toggle('hidden');
	}

	function closeMenu({ target }) {
		if (!navigation.contains(target)) {
			openMenu.classList.remove('opened');
			navigation.classList.remove('navigation--active');
			headerLogo.classList.remove('hidden');
			navigationLogo.classList.remove('vissible');
			body.classList.remove('hidden');
		}
	}

	links.forEach(link => {
		link.addEventListener('click', e => {
			if (navigation.classList.contains('navigation--active')) {
				toggleMenu(e);
			}
		});
	});

	document.addEventListener('click', closeMenu);
	openMenu.addEventListener('click', toggleMenu);
})();
