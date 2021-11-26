'use strict';

let counter = 0;

document.querySelector('.below').textContent = counter;

document.querySelector('.light').addEventListener('click', function () {
	document.querySelector('body').style.backgroundColor = '#faf3e0';
	counter++;
	document.querySelector('.below').textContent = counter;
	if (counter > 100) {
		document.querySelector('body').style.backgroundColor = '#ff0000';
		document.querySelector('.light').style.backgroundColor = '#ff0000';
		document.querySelector('.dark').style.backgroundColor = '#ff0000';
		document.querySelector('.below').style.backgroundColor = '#ff0000';
		document.querySelector('.dark').style.backgroundColor = '#ff0000';
		document.querySelector('.below').style.color = '#000';
		document.querySelector('.dark').style.color = '#ff0000';
		document.querySelector('.light').style.color = '#ff0000';
		if (counter > 200) {
			document.querySelector('.below').textContent = 'PLEASE STOP';
			if (counter > 500) {
				document.querySelector('.below').style.color = '#ff0000';
			}
		}
	}
});

document.querySelector('.dark').addEventListener('click', function () {
	document.querySelector('body').style.backgroundColor = '#1e212d';
	counter++;
	document.querySelector('.below').textContent = counter;
	if (counter > 100) {
		document.querySelector('body').style.backgroundColor = '#ff0000';
		document.querySelector('.light').style.backgroundColor = '#ff0000';
		document.querySelector('.dark').style.backgroundColor = '#ff0000';
		document.querySelector('.below').style.backgroundColor = '#ff0000';
		document.querySelector('.dark').style.backgroundColor = '#ff0000';
		document.querySelector('.below').style.color = '#000';
		document.querySelector('.dark').style.color = '#ff0000';
		document.querySelector('.light').style.color = '#ff0000';
		if (counter > 200) {
			document.querySelector('.below').textContent = 'PLEASE STOP';
			if (counter > 500) {
				document.querySelector('.below').style.color = '#ff0000';
			}
		}
	}
});
