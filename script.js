let btn = document.querySelector('button');
btn.addEventListener('click', function () {
	let gridLength = parseInt(prompt('Enter no. of squares(less than 100)', ''));
	if (isNaN(gridLength)) {
		return;
	}
	if (gridLength > 100) {
		return;
	}

	let container = document.getElementById('container');
	let containerWidth = parseInt(window.getComputedStyle(container).width);

	let boxWidth = containerWidth / gridLength;
	container.innerHTML = '';

	for (let i = 0; i < gridLength; i++) {
		let row = document.createElement('div');
		for (let j = 0; j < gridLength; j++) {
			let div = document.createElement('div');
			div.classList.add('box');
			div.style.cssText = `width : ${boxWidth}px; 
			height : ${boxWidth}px;`;
			row.appendChild(div);
		}
		container.appendChild(row);
	}

	let boxes = document.getElementsByClassName('box');
	Array.from(boxes).forEach(box => box.addEventListener('mouseover', function () {
		let currentColor = this.style.backgroundColor;
		if (!currentColor) {
			this.style.backgroundColor = 'rgb(229.5, 229.5, 229.5)';
		} else {
			let currentColorArr = currentColor.slice(4, currentColor.length -1).split(", ");
			let newColorArr = currentColorArr.map(color => color-25.5);
			let newColor = newColorArr.join(", ");
			this.style.backgroundColor = `rgb(${newColor})`;
		}
	}));
});

function getRandomColorValue() {
	return Math.random() * 255;
}