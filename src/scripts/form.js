(function () {
	document.addEventListener('DOMContentLoaded', function () {
		const form = document.querySelector('.form');
		const preloader = document.querySelector('.preloader');
		form.addEventListener('submit', formSend);

		async function formSend(e) {
			e.preventDefault();

			let error = formValidate(form);
      let formData = new FormData(form);

			if (error === 0) {
				preloader.classList.add('show');
				let response = await fetch('./phpmailer/send.php', {
					method: 'POST',
					body: formData
				});
				if (response.ok) {
					let result = await response.join();
					alert(result.message); //будет модальное окно
					preloader.classList.remove('show');
					form.reset();
				} else {
					//будет модальное окно
					alert('Ошибка!');
					preloader.classList.remove('show');
				}
			} else {
				alert('Заполните все поля!');
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
			// input.parentElement.classList.add('error');
			input.classList.add('_error');
		}

		function formRemoveError(input) {
			// input.parentElement.classList.remove('error');
			input.classList.remove('_error');
		}

		function checkPhone(input) {
			return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
		}
	});
})();
