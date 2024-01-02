let btn = document.querySelector('button');
btn.addEventListener('click', function () {
	let gridLength = prompt('Enter no. of squares(less than 100)', '');
	if (gridLength === null || gridLength === '') {
		return;
	}
	if (gridLength > 100) {
		return;
	}
	
	let container = document.getElementById('container');
	container.innerHTML = '';
	for (let i = 0; i < gridLength; i++) {
		let row = document.createElement('div');
		for (let j = 0; j < gridLength; j++) {
			let div = document.createElement('div');
			div.classList.add('box');
			row.appendChild(div);
		}
		container.appendChild(row);
	}

	let boxes = document.getElementsByClassName('box');
	Array.from(boxes).forEach(box => box.addEventListener('mouseover', function () {
		this.style.backgroundColor = 'black';
	}));
});