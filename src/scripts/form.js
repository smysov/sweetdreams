(function () {
	const form = document.querySelector('.form');
	const preloader = document.querySelector('.preloader');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			preloader.classList.add('show');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) {
				let result = await response.json();
				renderOverlay(result.message, 'Ваш заказ принят! Мы с Вами свяжемся в ближайшее время.');
				preloader.classList.remove('show');
				form.reset();
			} else {
				renderOverlay(
					'Ошибка!',
					'Что то пошло не так, попробуйте повторить через некоторое время.',
				); //Ошибка отправки
				preloader.classList.remove('show');
			}
		} else {
			renderOverlay(
				'Заполните поля!',
				'Прирожочек, заполни поля, либо проверь правильность заполненных полей.',
			);
		}
	}

	function formValidate(form) {
		let error = 0;
		let formRequired = document.querySelectorAll('._required');

		for (let i = 0; i < formRequired.length; i++) {
			const input = formRequired[i];
			formRemoveError(input);

			if (input.classList.contains('_phone')) {
				if (checkPhone(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.classList.remove('_error');
	}

	function checkPhone(input) {
		return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
	}

	function renderOverlay(header, text) {
		const fragment = document.createDocumentFragment();

		const overlay = document.createElement('div');
		const wrapper = document.createElement('div');
		const title = document.createElement('h2');
		const subtitle = document.createElement('p');
		const button = document.createElement('button');

		overlay.classList.add('overlay');
		wrapper.classList.add('overlay__wrapper');
		title.classList.add('overlay__title');
		subtitle.classList.add('overlay__subtitle');
		button.classList.add('overlay__button');
		document.body.classList.add('hidden');

		title.textContent = header;
		subtitle.textContent = text;
		button.textContent = `Закрыть`;

		wrapper.appendChild(title);
		wrapper.appendChild(subtitle);
		wrapper.appendChild(button);
		overlay.appendChild(wrapper);

		fragment.appendChild(overlay);
		document.querySelector('.main').appendChild(fragment);

		overlay.addEventListener('click', function (e) {
			if (e.target.tagName === 'BUTTON' || e.target === overlay) {
				document.body.classList.remove('hidden');
				overlay.remove();
			}
		});
	}
})();
