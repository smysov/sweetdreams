(function () {
	document.addEventListener('DOMContentLoaded', function () {
		const links = document.querySelectorAll('.menu__link');
		const orderButton = document.querySelector('.button__hero');

		orderButton.addEventListener('click', () => {
			document.getElementById('order').scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});

		links.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const blockID = e.target.getAttribute('href').substr(1);

				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			});
		});

		function headerSticky() {
			const header = document.querySelector('.header');
			header.classList.toggle('sticky', window.scrollY > 0);
		}

		window.addEventListener('scroll', headerSticky);
	});
})();
