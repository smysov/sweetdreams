(function () {
	const slides = document.querySelectorAll('.reviews-list__item');
	const leftButton = document.querySelector('.button-prev');
	const rightButton = document.querySelector('.button-next');
	const wrapper = document.querySelector('.reviews-list');
	let currentItem = 0;
	let isEnabled = true;

	function changeCurrentItem(n) {
		currentItem = (n + slides.length) % slides.length;
	}

	function hideItem(direction) {
		isEnabled = false;
		slides[currentItem].classList.add(direction);
		slides[currentItem].addEventListener('animationend', function () {
			this.classList.remove('active', direction);
		});
	}

	function showItem(direction) {
		slides[currentItem].classList.add('next', direction);
		slides[currentItem].addEventListener('animationend', function () {
			this.classList.remove('next', direction);
			this.classList.add('active');
			isEnabled = true;
		});
	}

	function previousItem(n) {
		hideItem('to-right');
		changeCurrentItem(n - 1);
		showItem('from-left');
	}

	function nextItem(n) {
		hideItem('to-left');
		changeCurrentItem(n + 1);
		showItem('from-right');
	}

	leftButton.addEventListener('click', function () {
		if (isEnabled) {
			previousItem(currentItem);
		}
	});

	rightButton.addEventListener('click', function () {
		if (isEnabled) {
			nextItem(currentItem);
		}
	});

	const swipedetect = el => {
		let surface = el;
		let startX = 0;
		let startY = 0;
		let distX = 0;
		let distY = 0;
		let dist = 0;

		let startTime = 0;
		let elapsedTime = 0;

		let threshold = 150;
		let restraint = 100;
		let allowedTime = 300;

		surface.addEventListener('mousedown', function (e) {
			startX = e.pageX;
			startY = e.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
		});

		surface.addEventListener('mouseup', function (e) {
			distX = e.pageX - startX;
			distY = e.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;

			if (elapsedTime <= allowedTime) {
				if (Math.abs(distX) >= threshold && Math.abs(distY < restraint)) {
					if (distX > 0) {
						if (isEnabled) {
							previousItem(currentItem);
						}
					} else {
						if (isEnabled) {
							nextItem(currentItem);
						}
					}
				}
			}

			e.preventDefault();
		});

		surface.addEventListener('touchstart', function (e) {

			let touchObject = e.changedTouches[0];
			startX = touchObject.pageX;
			startY = touchObject.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
		});

		surface.addEventListener('touchmove', function (e) {
			e.preventDefault();
		});

		surface.addEventListener('touchend', function (e) {
			let touchObject = e.changedTouches[0];
			distX = touchObject.pageX - startX;
			distY = touchObject.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;

			if (elapsedTime <= allowedTime) {
				if (Math.abs(distX) >= threshold && Math.abs(distY < restraint)) {
					if (distX > 0) {
						if (isEnabled) {
							previousItem(currentItem);
						}
					} else {
						if (isEnabled) {
							nextItem(currentItem);
						}
					}
				}
			}

			e.preventDefault();
		});
	};

	swipedetect(wrapper);
})();
