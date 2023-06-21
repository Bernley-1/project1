const filter = document.querySelector('#filter'); // Объявляем фильтр и список игр
const games = document.querySelectorAll('#games .game'); // Объявляем фильтр и список игр

filter.addEventListener('change', function() { // Добавляем обработчик события на изменение фильтра
const checkedFree = document.querySelector('.free1').checked;// Получаем значения чекбоксов
const checkedPaid = document.querySelector('.paid').checked;// Получаем значения чекбоксов
const checkedRussian = document.querySelector('.russian').checked;// Получаем значения чекбоксов
const checkedSubtitles = document.querySelector('.subtitles').checked;// Получаем значения чекбоксов
		
games.forEach(function(game){ // Итерируемся по каждой игре и проверяем на соответствие фильтру
			const isFree = game.classList.contains('free');
			const isPaid = game.classList.contains('paid');
			const isRussian = game.classList.contains('russian');
			const hasSubtitles = game.classList.contains('subtitles');
			
			if ((checkedFree && !isFree) || // Если игра не соответствует какому-то параметру фильтра, скрываем ее
				(checkedPaid && !isPaid) ||
				(checkedRussian && !isRussian) ||
				(checkedSubtitles && !hasSubtitles)) {
			game.style.display = 'none';
			} else { // Иначе показываем игру
			game.style.display = 'block';
			}
		});
		});