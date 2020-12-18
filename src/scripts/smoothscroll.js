(function () {
	function headerSticky() {
		const header = document.querySelector('.header');
		header.classList.toggle('sticky', window.scrollY > 0);
	}

	window.addEventListener('scroll', headerSticky);
})();
