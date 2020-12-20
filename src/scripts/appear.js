function appearAdvantages() {
	const advantages = document.querySelectorAll('.advantages__item');

	advantages.forEach(item => {
		const introPosition = item.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.35;

		if (introPosition < screenPosition) {
			item.classList.add('appear');
		}
	});
}

function appearTitle() {
	const title = document.querySelector('.about-us__title');
	const introPosition = title.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.4;
	if (introPosition < screenPosition) {
		title.classList.add('appear-title');
	}
}

function appearSubtitle() {
	const title = document.querySelector('.about-us__subtitle');
	const introPosition = title.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.5;
	if (introPosition < screenPosition) {
		title.classList.add('appear-title');
	}
}

window.addEventListener('scroll', appearAdvantages);
window.addEventListener('scroll', appearTitle);
window.addEventListener('scroll', appearSubtitle);
