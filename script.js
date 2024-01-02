let container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
	let row = document.createElement('div');
	for (let j = 0; j < 16; j++) {
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