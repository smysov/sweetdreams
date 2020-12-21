(function () {
	const products = document.querySelectorAll('.catalog-list__item');
	const navigationButtons = document.querySelector('.catalog-groups');

	navigationButtons.addEventListener('click', event => {
		if (event.target.tagName !== 'BUTTON') return;
		let filterClass = event.target.dataset['group'];

		products.forEach(product => {
			if (!product.classList.contains(filterClass) && filterClass !== 'all') {
				product.classList.add('hidden');
			} else {
				product.classList.remove('hidden');
			}
		});
	});
})();
